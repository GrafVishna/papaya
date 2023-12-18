// registration.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice.js";
import { auth } from "../firebase.js";

export const registerUser = async (
  dispatch,
  setModalSIn,
  setError,
  email,
  password,
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    dispatch(
      setUser({
        name: user.name,
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }),
    );

    setTimeout(() => {
      setModalSIn(false);
    }, 2400);
  } catch (error) {
    console.error("Firebase Authentication Error:", error);
    setError(error.code);
  }
};
