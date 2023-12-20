import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";

export const authUser = async (setModalSIn, setError, email, password) => {
  await setPersistence(auth, browserLocalPersistence);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setTimeout(() => setModalSIn(false), 2400);
      console.log("Authentication Success:");
    })
    .catch((error) => {
      console.error("Authentication Error:", error);
      setError(error.code);
    });
};
