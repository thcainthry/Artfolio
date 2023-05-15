import React from "react";

import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Exhibition from './components/Pages/Exhibition.jsx';
import Contact from './components/Pages/Contact.jsx';
import LandingPage from './components/Pages/LandingPage.jsx';
import LoginPage from './components/Pages/LoginPage.jsx';
import SignUp from './components/Pages/SignUp.jsx';
import ForgetPasswordPage from './components/Pages/ForgetPasswordPage.jsx';




import "./styles.css";
 

import Navbar from "./components/environments/Navbar.js";
import Footer from "./components/environments/Footer.js";

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
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About}/>
          <Route exact path="/Exhibiton" component={Exhibition}/>
          <Route exact path="/LandingPage" component={ LandingPage } />
          <Route path="/LoginPage" component={ LoginPage } />
          <Route path="/SignUp" component={ SignUp } />
          <Route path="/ForgetPasswordPage" component={ ForgetPasswordPage } />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
 
