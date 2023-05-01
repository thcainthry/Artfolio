import React from 'react'

import ForgetPasswordPage from './ForgetPasswordPage.jsx';
import '../style/log-register.css'

export default function SignInPage() {
    
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="hyyp://localhost:3000/login">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <a href="/ForgetPasswordPage" element={<ForgetPasswordPage />}>
                        <label className="right-label">Forget password?</label>
                        </a>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer className="fot">
                <p>First time? <a href='/SignUp'>Create an account</a>.</p>
                <p><a href="/">Back to Homepage</a>.</p>
            </footer>
        </div>
    )
}