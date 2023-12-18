import {
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { setUser } from "../store/slices/userSlice.js";
import { useMatchMedia } from "../hooks/useMatchMedia.jsx";

export const signInWithGoogle = async (auth, dispatch, setModalSIn) => {
  try {
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserSessionPersistence);

    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    dispatch(
      setUser({
        email: user.email,
        id: user.uid,
        token: token,
      }),
    );

    setTimeout(() => {
      setModalSIn(false);
    }, 2400);

    console.log("Google Authentication Success:", user);
  } catch (error) {
    console.error("Google Authentication Error:", error);
  }
};
