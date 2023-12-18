// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { GoogleAuthProvider } from "firebase/auth";
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyAO7fOOwPmafiUZGbTrrjALvzC4rWD7pOk",
  // authDomain: "papayaapi.firebaseapp.com",
  authDomain: "papaya.artem.monster",
  projectId: "papayaapi",
  storageBucket: "papayaapi.appspot.com",
  messagingSenderId: "1027901639957",
  appId: "1:1027901639957:web:cafc699b13e4720b322d1c",
  measurementId: "G-EJS7913SVE",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
