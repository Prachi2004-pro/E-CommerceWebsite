import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          Name<input type="text" placeholder='Your Name' />
          Email<input type="email" placeholder='E-mail Address' />
          Password<input type="password" placeholder='Password' />
        </div>
        <button>Sign-Up</button>
        <p className='login'>Already have an account? <span>Login Here</span></p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup