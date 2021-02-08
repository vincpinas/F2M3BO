// Import CSS
import './App.css';

// Import React Modules
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import Components
import Navbar from './Components/Navbar/Navbar'

// Import Pages
import Home from './Pages/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path ='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
