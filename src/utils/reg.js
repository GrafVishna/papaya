import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";
import { setUser } from "../store/slices/userSlice.js";
import { auth } from "../firebase.js";

export const registerUser = async (
  dispatch,
  setModalSIn,
  setError,
  email,
  password,
) => {
  await setPersistence(auth, browserLocalPersistence);
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    dispatch(setUser());
    setTimeout(() => setModalSIn(false), 2400);

    console.log("Registration Success:");
  } catch (error) {
    console.error("Firebase Authentication Error:", error);
    setError(error.code);
  }
};
