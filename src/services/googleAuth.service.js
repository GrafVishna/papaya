import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { saveUserDataToFirestore } from "./userFirestore.js";
import { getUserDataParse, setUser } from "../store/slices/userSlice.js";

export const signInWithGoogle = async (auth, setModalSIn, dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = getUserDataParse(result);
    // Write to LocalStorage
    dispatch(setUser(user));
    // Write to Firestore
    await saveUserDataToFirestore(user.uid, user);
    // Close modal
    setTimeout(() => setModalSIn(false), 2400);

    console.log("Google Authentication Success:");
  } catch (error) {
    console.error("Google Authentication Error:", error);
  }
};
