import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";
import { auth } from "../firebase.js";

export const registerUser = async (setModalSIn, setError, email, password) => {
  await setPersistence(auth, browserLocalPersistence);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setTimeout(() => setModalSIn(false), 2400);
    })
    .catch((error) => {
      console.error("Registration Error:", error);
      setError(error.code);
    });
};
