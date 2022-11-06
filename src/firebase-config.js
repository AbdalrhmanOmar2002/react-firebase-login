import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEwguCFWnXCX8hhXNn06etE-dYelQenu8",
  authDomain: "react-firebase-login-d5e28.firebaseapp.com",
  projectId: "react-firebase-login-d5e28",
  storageBucket: "react-firebase-login-d5e28.appspot.com",
  messagingSenderId: "283250587633",
  appId: "1:283250587633:web:a6aced8e0deee5055bb650",
  measurementId: "G-92RQ9B4ZRP",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
