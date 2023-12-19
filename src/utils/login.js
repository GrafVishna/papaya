// registration.js
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setUser } from "../store/slices/userSlice.js";
import { auth } from "../firebase.js";

export const authUser = async (
  dispatch,
  setModalSIn,
  setError,
  email,
  password,
) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser());
    setTimeout(() => setModalSIn(false), 2400);

    console.log("Authentication Success:");
  } catch (error) {
    console.error("Firebase Authentication Error:", error);
    setError(error.code);
  }
};
