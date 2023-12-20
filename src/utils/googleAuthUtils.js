import {
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  browserLocalPersistence,
} from "firebase/auth";

export const signInWithGoogle = async (auth, setModalSIn) => {
  try {
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserLocalPersistence);
    await signInWithPopup(auth, provider);

    setTimeout(() => setModalSIn(false), 2400);

    console.log("Google Authentication Success:");
  } catch (error) {
    console.error("Google Authentication Error:", error);
  }
};
