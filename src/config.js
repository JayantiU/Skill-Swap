import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8SOnYhRXnv6_hrfxZO8oycyCIOihsqvM",
  authDomain: "",
  databaseURL: "",
  projectId: "skill-swap-2fe5e",
  storageBucket: "",
  messagingSenderId: "206057775996",
  appId: "1:206057775996:web:7f59696e2fa989e85cfaf9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
