import React, { useState } from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  const [state, setState] = useState("Sign-Up");
  const [formData , setFormData] = useState({
    username:"",
    password:"",
    email:""
  });

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch('https://e-commerce-backend-59ko.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log("Sign-Up Function Executed", formData);
    let responseData;
    await fetch('https://e-commerce-backend-59ko.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className="LoginSignup">
      <div className="container">
        <h1>{state}</h1>
        <div className="fields">
          {state === "Sign-Up" ? (
            <>
              <label>Name</label>
              <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />
            </>
          ):(
            <></>
          )}
          Email
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="E-mail Address" />
          Password
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>

        {/* Ternary Operator */}
        {state === "Login"?(
          <button onClick={()=>{login()}}>Login</button>
        ):(
          <button onClick={()=>{signup()}}>Sign-Up</button>
        )}

        {/* Ternary Operator */}
        {state === "Sign-Up" ? (
        <p className="login">
          Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span>
        </p>):(
        <p className="login">
          Create an account? <span onClick={()=>{setState("Sign-Up")}}>Click Here</span>
        </p>
        )}
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
