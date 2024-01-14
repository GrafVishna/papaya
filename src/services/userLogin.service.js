import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { getUserDataParse, setUser } from "../store/slices/userSlice.js";

export const authUser = async ({
  setModalSIn,
  dispatch,
  setError,
  email,
  password,
}) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = getUserDataParse(userCredential);
      dispatch(setUser(user));

      setTimeout(() => setModalSIn(false), 2400);
      console.log("Authentication Success:");
    })
    .catch((error) => {
      console.error("Authentication Error:", error);
      setError(error.code);
    });
};
