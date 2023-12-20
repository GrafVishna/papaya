import {
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  signInWithPopup,
  browserLocalPersistence,
} from "firebase/auth";
import { setUser } from "../store/slices/userSlice.js";

export const signInWithGoogle = async (auth, dispatch, setModalSIn) => {
  try {
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserLocalPersistence);
    await signInWithPopup(auth, provider);
    dispatch(setUser());
    setTimeout(() => setModalSIn(false), 2400);

    console.log("Google Authentication Success:");
  } catch (error) {
    console.error("Google Authentication Error:", error);
  }
};
