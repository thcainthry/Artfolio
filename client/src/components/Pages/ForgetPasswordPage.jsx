import React from 'react'

import '../style/log-register.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5 >Enter your email address and we will send you a new password</h5>
            <form className='l' action="/login">
                <p>
                    <label className='l' id="reset_pass_lbl">Email address</label><br/>
                    <input className='l' type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <a href="/SignUp">Create an account</a>.</p>
                <p><a href="/">Back to Homepage</a>.</p>
            </footer>
        </div>
    )
}