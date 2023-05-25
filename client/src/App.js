import React from "react";
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Exhibition from './components/Pages/Exhibition.jsx';
import Contact from './components/Pages/Contact.jsx';
import LandingPage from './components/Pages/LandingPage.jsx';
import LoginPage from './components/Pages/LoginPage.jsx';
import SignUp from './components/Pages/SignUp.jsx';
import ForgetPasswordPage from './components/Pages/ForgetPasswordPage.jsx';



import Nav from './components/environments/Nav.js';
import Dashboard from './components/Pages/Dashboard.jsx';
import Products from './components/Pages/Products.jsx';
import Users from './components/Pages/Users.jsx';

import "./styles.css";
import Buy from './components/Pages/Buy.jsx';


import "./styles.css";
 

import Navbar from "./components/environments/Navbar.js";
import Footer from "./components/environments/Footer.js";
import Collections from "./components/Pages/Collections.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";

export default function App() {
  const isAdmin = true; 
  return (
    <Router>
        <Switch>

        {isAdmin ? (
            <>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/users" component={Users} />
              <Route path="/products" component={Products} />
              <Nav />
            </>
          ) : (
            <>
            <div className="App">
            <Navbar />
             <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Buy" component={Buy}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Exhibition" component={Exhibition}/>
          <Route exact path="/LandingPage" component={ LandingPage } />

          <Route exact path="/LoginPage" component={ LoginPage } />
          <Route exact path="/Buy" component={ Buy } />
          <Route exact path="/SignUp" component={ SignUp } />
          <Route exact path="/ForgetPasswordPage" component={ ForgetPasswordPage } />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Collections" component={Collections} />

        
          <Footer />
          </div>
            </>
            
          )}



        </Switch>
    </Router>
  );
}