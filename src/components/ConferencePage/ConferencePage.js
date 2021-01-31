import React, { useEffect, useState } from "react";
import sad from "../../Sad";
import firebase from "../../config";
import { useHistory } from "react-router-dom";

function ConferencePage() {
  let history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        sad();
      } else {
        history.push("/");
        window.location.reload();
      }
    });
  }, []);

  return <div></div>;
}

export default ConferencePage;
