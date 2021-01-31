import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RegisterPage.css";
import firebase from "../../config";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistration = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="background">
      <div className="register-page">
        <input className="name" placeholder="Name" type="text" />
        <span>&nbsp; &nbsp; &nbsp;</span>
        <input placeholder="Email" type="text" onChange={handleEmail} />
        <span>&nbsp; &nbsp; &nbsp;</span>
        <input
          placeholder="Password"
          type="password"
          onChange={handlePassword}
        />
        <br></br>
        <button onClick={handleRegistration}>Submit</button>
      </div>
    </div>
  );
}

export default RegisterPage;
