// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOr2TXM8OnqUdXNTSsb9X0i4wRkuhWUOQ",
  authDomain: "schoolmate-cdd22.firebaseapp.com",
  projectId: "schoolmate-cdd22",
  storageBucket: "schoolmate-cdd22.appspot.com",
  messagingSenderId: "189522594600",
  appId: "1:189522594600:web:fe75cc8fba516ce2915e1d",
  measurementId: "G-ZHZDCXJ4DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export default firebase;