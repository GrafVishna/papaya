import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { saveUserDataToFirestore } from "./userFirestore.js";
import { setUser } from "../store/slices/userSlice.js";
import { data } from "autoprefixer";

export const registerUser = async ({
  setModalSIn,
  dispatch,
  setError,
  email,
  password,
}) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    const userData = {
      email: email,
      uid: user.uid,
      timeStamp: new Date().toISOString(),
    };
    // Write to LocalStorage
    dispatch(setUser(userData));
    // Write to Firestore
    await saveUserDataToFirestore(user.uid, userData);
    // Close modal
    setTimeout(() => setModalSIn(false), 2400);
  } catch (error) {
    console.error("Registration Error:", error);
    setError(error.code);
  }
};
