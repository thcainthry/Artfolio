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
import Sales from './components/Pages/Sales.jsx';
import Messages from './components/Pages/Messages.jsx';
import Products from './components/Pages/Products.jsx';
import Users from './components/Pages/Users.jsx';
import Deliveries from './components/Pages/Deliveries.jsx';
import Settings from './components/Pages/Settings.jsx';
import SingleProduct from './components/Pages/SingleProduct.jsx';
import Login from './components/Pages/Login.jsx';
import Page404 from './components/Pages/Page404.jsx';
import Register from './components/Pages/Register.jsx';

import "./styles.css";

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
          <Route exact path="/Exhibition" component={Exhibition}/>
          <Route exact path="/LandingPage" component={ LandingPage } />
          <Route path="/LoginPage" component={ LoginPage } />
          <Route path="/SignUp" component={ SignUp } />
          <Route path="/ForgetPasswordPage" component={ ForgetPasswordPage } />
          <Route path="/Contact" component={Contact} />
        
          <Nav />
          <Route path="/Dashboard" component={Dashboard} />
            <Route  path="/Sales" component={Sales} />
            <Route  path="/Messages" component={Messages} />
            <Route  path="/Products" component={Products} />
            <Route  path="/Users" component={Users} />
            <Route  path="/Deliveries" component={Deliveries} />
            <Route  path="/Settings" component={Settings} />
            <Route  path="/Products/:id" component={SingleProduct} />
            <Route  path="/login" component={Login} />
        <Route  path="/register" component={Register} />
        <Route path="/Page404" component={Page404} />

        </Switch>
        <Footer />
        
      </div>
    </Router>
  );
}