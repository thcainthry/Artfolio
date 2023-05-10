import React from 'react'

import LoginPage from '../pages/LoginPage.jsx';
import SignUp from '../pages/SignUp.jsx';




import '../style/log-register.css'
import BackgroundImage from '../assets/bg.png'

export default function LandingPage() {
    
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div className="buttons text-center">
                <a href="/LoginPage" element={<LoginPage />}>
                    <button className="primary-button">log in</button>
                </a>
                <a href="/SignUp" element={<SignUp />}>
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </a>
            </div>
        </header>
    )
   
}
const HeaderStyle = {

    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}
