const team = document.getElementById('team')

// App Alerts
const Alerts = () => {
    const [teamError, setTeamError] = useState(false);
    team.addEventListener('click', () => {
        setTeamError(true)
        setTimeout(() => setTeamError(false), 10000)
    })

    return e(
    React.Fragment, null, 
    e(Alert, { text: "take a look around!", timer: 6000, delay: 60, error: false }),
    e(Alert, { text: "Not much to see yet, but..", timer: 6000, delay: 0, error: false}),
    teamError ? e(Alert, { text: "TEAM ERROR!", timer: 6000, delay: 0, error: true}) : null
    )
}

ReactDOM.render(e(Alerts), alertContainer)