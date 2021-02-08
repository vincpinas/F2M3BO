// Import CSS
import './App.css';

// Import react libs
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import Pages
import Home from './Pages/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path ='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
