import React from 'react'

import LoginPage from '../Pages/LoginPage.jsx';
import SignUp from '../Pages/SignUp.jsx';




import '../style/log-register.css'
import BackgroundImage from '../assets/wallpaper.png'

export default function LandingPage() {
    
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Join Us</h1>
            <div className="login_buttons">
                <a href="/LoginPage" element={<LoginPage />}>
                    <button className="primary-button" id="reg_btn"><span>log in</span></button>
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
