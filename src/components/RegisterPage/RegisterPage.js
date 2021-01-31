import React from "react";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register">
      <div className="register-page">
        <input className="name" placeholder="Name" type="text" className="smexy"  />
        <span>&nbsp; &nbsp; &nbsp;</span>
        <input placeholder="Email" type="text" className="smexy" />
        <span>&nbsp; &nbsp; &nbsp;</span>
        <input placeholder="Password" type="password" className="smexy"  />
        <br></br>
        <button className="button-submit">Submit</button>
      </div>
    </div>
  );
}

export default RegisterPage;
