// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as firebase from "firebase";
// import "firebase/firestore";
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyAzhQDKCFSqSvAq7YcQLlkaLDWoztxmjDM",
//   authDomain: "cart-ea44c.firebaseapp.com",
//   projectId: "cart-ea44c",
//   storageBucket: "cart-ea44c.appspot.com",
//   messagingSenderId: "550759282955",
//   appId: "1:550759282955:web:cf53b3367a64c1c2b60a0e"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// ReactDOM.render(<App />, document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAzhQDKCFSqSvAq7YcQLlkaLDWoztxmjDM",
  authDomain: "cart-ea44c.firebaseapp.com",
  projectId: "cart-ea44c",
  storageBucket: "cart-ea44c.appspot.com",
  messagingSenderId: "550759282955",
  appId: "1:550759282955:web:cf53b3367a64c1c2b60a0e"
};


firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById("root"));
export const firestore = firebase.firestore();


export default firebase;