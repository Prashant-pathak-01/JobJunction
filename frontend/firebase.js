// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5mbs1bWd3cfw40lyX3TL_TiJqrqclG4s",
  authDomain: "job-junction-01.firebaseapp.com",
  projectId: "job-junction-01",
  storageBucket: "job-junction-01.appspot.com",
  messagingSenderId: "431122703055",
  appId: "1:431122703055:web:6561ccdbf8854fc8b4cdba",
  measurementId: "G-EB9B6G9ZLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);