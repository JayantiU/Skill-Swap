import React from "react";
import { Link } from "react-router-dom";

import "./LoginPage.css";

function LoginPage() {
  return (

    <div className="other">
      <div className="login-page">
        <input placeholder="Email" type="text"  className="input"/>
        <br></br>
        <input placeholder="Password" type="password"className="input" />
        <br></br>
        <button className="button-login">Login</button>

        <div className="sign-up-text">
          Don't have an account?{" "}
          <span className="input">
            {" "}
            
            <Link to="/register" className ="reallyobscure" >Sign Up
            </Link >
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
