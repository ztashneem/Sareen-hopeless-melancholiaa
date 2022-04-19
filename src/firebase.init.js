// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3NC7FwsrP4VwOgFl2vkriQhDeChbrAZY",
  authDomain: "sareen-hopeless-melancholia.firebaseapp.com",
  projectId: "sareen-hopeless-melancholia",
  storageBucket: "sareen-hopeless-melancholia.appspot.com",
  messagingSenderId: "534521987851",
  appId: "1:534521987851:web:41528e3dd0087188a4980e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;