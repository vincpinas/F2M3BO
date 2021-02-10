'use strict';

const App = () => {
    return e(
    React.Fragment, null, 
    e(Alert, { text: "take a look around!", timer: 6000, delay: 60 }),
    e(Alert, { text: "Not much to see yet, but..", timer: 6000, delay: 0} ))
}

ReactDOM.render(e(App), alertContainer)