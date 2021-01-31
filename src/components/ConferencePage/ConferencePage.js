import React, { useEffect } from "react";
import sad from "../../Sad";
import firebase from "../../config";
import { useHistory } from "react-router-dom";

function ConferencePage() {
  var count = 0;

  let history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        sad();
      } else {
        history.push("/");
        window.location.reload();
      }
    });
  }, []);

  return (
    <div>
      <div>Big Sad</div>
    </div>
  );
}

export default ConferencePage;
