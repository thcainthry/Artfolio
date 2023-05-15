import React from 'react'
import { Link } from 'react-router-dom'

import '../style/ForgetPassword.css'

export default function ForgetPasswordPage() {
    return (
        <div className="test">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/forget">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="fot_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer className='forget-footer'>
                <p>First time? <Link to="/SignUp">Create an account</Link>.</p>
                <p><Link to="/LangingPage">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}