import { Alert, UserInfo, LoadingScreen } from './Components.js'
import { postData } from './Helpers.js'
import { alertContainer, userDetails, widget1 } from './elements.js';

const { useState, useEffect } = React
const e = React.createElement;

// App Alerts
const AlertsContainer = () => {
    return e(
    React.Fragment, null, 
        e(Alert, { text: "take a look around!", timer: 6000, delay: 60, error: false }),
        e(Alert, { text: "Not much to see yet, but..", timer: 6000, delay: 0, error: false}),
    )
}

ReactDOM.render(e(AlertsContainer), alertContainer)


// User Details
const userInfoContainer = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`https://randomuser.me/api/`, { })
            .then(response => response.json())
            .then(json => setUser(json))
            .catch(err => console.error(err))
            .finally(setTimeout(() => setLoading(false), 650))
    }, [])
    
    return !loading && user ? e(
    React.Fragment, null,
        e(UserInfo, { 
            role: "Admin", 
            profilePic: user.results[0].picture.large, 
            user: `${user.results[0].name.first} ${user.results[0].name.last}` 
        })
    ) : e(LoadingScreen)
}

ReactDOM.render(e(userInfoContainer), userDetails)


// Widget
const Widget = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [barActive, setBarActive] = useState(false);

    !loading && data ? setTimeout(() => {
      new Chartist.Line(`#widget1chart`, {
        labels: ["GPU", "CPU", "MOBO"],
        series: [
          [55, 67, 64, 72, 71, 71, 80, 71, 87],
          [66, 60, 75, 70, 72, 82, 86, 82, 83],
          [90, 81, 87, 94, 89, 90, 88, 96, 90]
        ]
      })
    }, 50) : null
    
    useEffect(() => {
        setTimeout(() => setBarActive(true), 700);
        setLoading(true);
        postData(`/duurzaam-huis/api/api.php?request_id=2`, { })
            .then(response => setData(response))
            .catch(err => console.error(err))
            .finally(setTimeout(() => setLoading(false), 650))
    }, []);

    return !loading && data ? e("div", { className: "widgetContent toolItem" },
        e("div", { className: "graph-bar-container" }, 'Tempatures, before and after fixes.',
            e("div", 
              { 
                className: "graph-bar", 
                style: barActive ? { width: `${data.tempatures.before}%` } : null 
              }, `Before: ${data.tempatures.before}°C`
            ),
            e("div", 
              { 
                className: "graph-bar", 
                style: barActive ? { width: `${data.tempatures.after}%`, transitionDelay: '0.1s' } : null 
              }, `After: ${data.tempatures.after}°C`
            ),
            e("p", {}, "Tempatures during testing"),
            e("div",
              { id: "widget1chart", style: { maxHeight: `100%`} }
            ),
            e("div", {className: "graph-info-container"},
              e("div", {style:{height: "13px", width: "13px", backgroundColor: "#A4161A"}}),
              e("p", {style:{fontSize: "12px", margin: "4px"}}, "GPU"),
              e("div", {style:{height: "13px", width: "13px", backgroundColor: "#E5383B"}}),
              e("p", {style:{fontSize: "12px", margin: "4px"}}, "CPU"),
              e("div", {style:{height: "13px", width: "13px", backgroundColor: "#e7c400"}}),
              e("p", {style:{fontSize: "12px", margin: "4px"}}, "MOBO")
            )
        ),
        e("div", { className: "tooltip" }, `${data.description.split("fixes")[0]}`)
    ) : e(LoadingScreen)
}

ReactDOM.render(e(Widget), widget1)