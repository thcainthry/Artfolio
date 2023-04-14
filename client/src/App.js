import React from "react";
import Home from './components/Pages/Home.jsx';
//import About from './components/Pages/About.jsx';
import Exhibition from './components/Pages/Exhibiton.jsx';
import Contact from './components/Pages/Contact.jsx';
import LandingPage from './components/Pages/LandingPage.jsx'
import LoginPage from './components/Login-Signup/LoginPage.jsx'
import SignUp from './components/Login-Signup/SignUp.jsx'
import ForgetPasswordPage from './components/Login-Signup/ForgetPasswordPage.jsx'



import Navbar from "./components/Navbar.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Exhibition" component={Exhibition}/>
          <Route exact path="/LandingPage" component={ LandingPage } />
          <Route path="/LoginPage" component={ LoginPage } />
          <Route path="/SignUp" component={ SignUp } />
          <Route path="/ForgetPasswordPage" component={ ForgetPasswordPage } />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
 
