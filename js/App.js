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

    !loading && user ? console.log(user.results[0]) : null
    
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

    useEffect(() => {
        setLoading(true);
        postData(`/duurzaam-huis/api/api.php?request_id=2`, { })
            .then(response => setData(response))
            .catch(err => console.error(err))
            .finally(setTimeout(() => setLoading(false), 650))
    }, []);
    
    !loading && data ? console.log(data) : null

    return !loading && data ? e("div", { className: "widgetContent toolItem" },
        e("div", { className: "tooltip" }, `Data provider: ${data.creator.first} ${data.creator.last.split()[0]}.`)
    ) : e(LoadingScreen)
}

ReactDOM.render(e(Widget), widget1)