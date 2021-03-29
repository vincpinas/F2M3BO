'use strict';
const { useState, useEffect } = React
const e = React.createElement;

// Alert Component
export const Alert = (props) => {
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


// User Information (Sidebar) Component
export const UserInfo = (props) => {
    return e("div", { className: "detailsContainer"},
       e("img", { className: "s-userImg s-Item", src: props.profilePic }),
       e("div", { className: "userTextWrapper"},
          e("h4", { className: "s-userName" }, props.user),
          e("h4", { className: props.role === "Admin" ? "s-userRole admin" : "s-userRole default" }, props.role)
       )
    )
}


// Loading Screen
export const LoadingScreen = () => {
  return e("div", { className: "lds" },
    e("div", { className: "lds-ellipsis" },
      e("div", null),
      e("div", null),
      e("div", null),
      e("div", null)
    )
  )
} 
