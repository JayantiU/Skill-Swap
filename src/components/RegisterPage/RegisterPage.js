import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RegisterPage.css";
import firebase from "../../config";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");// eslint-disable-next-line

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
    <div className="register">
      <div className="register-page">{/*eslint-disable-next-line*/}
        <input className="name" placeholder="Name" type="text" className="smexy"  />{/* //eslint-disable-next-line*/}
        <span>&nbsp; &nbsp; &nbsp;</span>{/*eslint-disable-next-line*/}
        <input placeholder="Email" type="text" className="smexy" onChange={handleEmail} />
        <span>&nbsp; &nbsp; &nbsp;</span>
        <input
          placeholder="Password"
          type="password"
          className="smexy"
          onChange={handlePassword}
        />
        <br></br>
        <button className="button-submit" onClick={handleRegistration}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
