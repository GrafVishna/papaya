// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const API_KEY = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "papaya-4f07b.firebaseapp.com",
  projectId: "papaya-4f07b",
  storageBucket: "papaya-4f07b.appspot.com",
  messagingSenderId: "622850445961",
  appId: "1:622850445961:web:56370934e019f267032c58",
  measurementId: "G-JVLNDFLR45",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
