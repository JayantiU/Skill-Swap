import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth"

const firebaseApp=({
    apiKey: "AIzaSyB-YhAD2_AL_OGy7cJglmTWkRbvFgsRRAk",
    authDomain: "fir-rtc-d5f9b.web.app/",
    projectId: "fir-rtc-d5f9b",
    messagingSenderId: "665884169621",
    appId: "1:665884169621:web:61104663e37654fa13d29c",
    measurementId: "G-2QYX9R0TV1"
});
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseApp);
  }
export default firebase;
