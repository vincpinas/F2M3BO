// App Alerts
const alertContainer = document.getElementById('c-alert-container')

const AlertsContainer = () => {
    return e(
    React.Fragment, null, 
        e(Alert, { text: "take a look around!", timer: 6000, delay: 60, error: false }),
        e(Alert, { text: "Not much to see yet, but..", timer: 6000, delay: 0, error: false}),
    )
}

ReactDOM.render(e(AlertsContainer), alertContainer)


// User Details
const userDetails = document.querySelector('.s-userDetails')

const userInfoContainer = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`https://randomuser.me/api/`, {  })
            .then(response => response.json())
            .then(json => setUser(json))
            .catch(err => console.error(err))
            .finally(setTimeout(() => setLoading(false), 1500))
    }, [])
    
    return !loading && user ? e(
    React.Fragment, null,
        e(UserInfo, { 
            role: "Admin", 
            profilePic: "assets/profileImg-0.jpeg", 
            user: `${user.results[0].name.first} ${user.results[0].name.last}` 
        })
    ) : e(LoadingScreen)
}

ReactDOM.render(e(userInfoContainer), userDetails)

// In-house Api Calls
postData(`/duurzaam-huis/api/api.php`, {})
    .then(data => console.log(data))