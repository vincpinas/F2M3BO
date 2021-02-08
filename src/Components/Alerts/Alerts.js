import React, { useState, useEffect } from 'react'
import './Alerts.css'

function Alerts(props) {
    const [alertActive, setAlertActive] = useState(false);

    useEffect(() => {
        // Alert Timing Functionality.
        const delay = setTimeout(() => setAlertActive(true), 1000 + props.delay);
        const timer = setTimeout(() => setAlertActive(false), props.timer + props.delay);

        // Clean up function.
        return () => {
            clearTimeout(delay);
            clearTimeout(timer);
        };
      }, [props.delay, props.timer]);

    return (
        <div className={alertActive ? 'c-alert active' : 'c-alert'}>
            <p>{props.text}</p>
        </div>
    )
}

export default Alerts