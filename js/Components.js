'use strict';

// Alert Component
const { useState, useEffect } = React

const alertContainer = document.getElementById('c-alert-container')

const e = React.createElement;

const Alert = (props) => {
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

      return e("div", {
        className: alertActive ? 'c-alert active' : 'c-alert',
        style: props.error ? {
          background: '#bd2e2e'
        } : null
      }, e("p", null, props.text));
}