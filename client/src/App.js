import React from "react";
import Home from './components/Pages/Home.jsx';
import LandingPage from './components/Pages/LandingPage.jsx';
import About from './components/Pages/About.jsx';
import Contact from './components/Pages/Contact.jsx';



import Navbar from "./components/Navbar.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/LandingPage" component={LandingPage} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
 

