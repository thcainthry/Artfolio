import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/Login-Signup/LandingPage'
import LoginPage from './components/Login-Signup/LoginPage'
import SignUp from './components/Login-Signup/SignUp'
import ForgetPasswordPage from './components/Login-Signup/ForgetPasswordPage'
//import HomePage from './components/pages/HomePage'

import './App.css'

export default function Login() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/LoginPage" component={ LoginPage } />
                    <Route path="/SignUp" component={ SignUp } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}