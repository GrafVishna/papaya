import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { setUser } from "../store/slices/userSlice.js";
import { useModal } from "../providers/ModalProvider.jsx";
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const { setModalSIn } = useModal();
export const handleLogIn = async (email, pass, dispatch) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    const { user } = await signInWithEmailAndPassword(auth, email, pass);

    dispatch(
      setUser({
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
