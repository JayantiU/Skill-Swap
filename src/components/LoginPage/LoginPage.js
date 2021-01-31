import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginPage.css";
import firebase from "firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/conference");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="obscure">
      <div className="login-page">
        <input placeholder="Email" type="text" onChange={handleEmail} />
        <br></br>
        <input
          placeholder="Password"
          type="password"
          onChange={handlePassword}
        />
        <br></br>
        <button onClick={handleLogin}>Login</button>
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
