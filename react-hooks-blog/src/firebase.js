import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwnZes48UgapCfEjDZZSfDPecd4JAzw68",
  authDomain: "react-hooks-blog-bd37f.firebaseapp.com",
  projectId: "react-hooks-blog-bd37f",
  storageBucket: "react-hooks-blog-bd37f.appspot.com",
  messagingSenderId: "281442880300",
  appId: "1:281442880300:web:3fd20b1c87b6de676aba89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
