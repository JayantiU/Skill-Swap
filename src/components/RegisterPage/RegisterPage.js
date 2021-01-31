import React from "react";
import "./RegisterPage.css";
import LoginBackground from "./register.png";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="background">
      <div className="register-page">
        <input className="name" placeholder="Name" type="text" />
        <span>&nbsp; &nbsp; &nbsp;</span>
        <input placeholder="Email" type="text" />
        <span>&nbsp; &nbsp; &nbsp;</span>
        <input placeholder="Password" type="password" />
        <br></br>
        <Link to="/"><button className="button-submit">Submit</button></Link>
      </div>
    </div>
  );
}

export default RegisterPage;
