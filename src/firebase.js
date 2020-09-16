import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC-T3l_XqHtA0fiFfu36frXpwNH1clmxkA",
  authDomain: "todolist-tut-2c7c0.firebaseapp.com",
  databaseURL: "https://todolist-tut-2c7c0.firebaseio.com",
  projectId: "todolist-tut-2c7c0",
  storageBucket: "todolist-tut-2c7c0.appspot.com",
  messagingSenderId: "361207734448",
  appId: "1:361207734448:web:bc4f1aa537eac21dff1b75",
});

export { firebaseConfig as firebase };
