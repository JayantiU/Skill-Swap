import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="obscure">
      <div className="login-page">
        <input placeholder="Email" type="text" />
        <br></br>
        <input placeholder="Password" type="password" />
        <br></br>
        <button className="button-login">Login</button>

        <div className="sign-up-text">
          Don't have an account?{" "}
          <span className="psw">
            {" "}
            <Link to="/register">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
