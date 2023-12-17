import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice.js";
import { useDispatch } from "react-redux";
import { Tab } from "@headlessui/react";
import { AuthForm } from "./form/AuthForm.jsx";
import { useState } from "react";
import { useModal } from "../../../providers/ModalProvider.jsx";

export const LoginPage = ({ subtitle, button }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { setModalSIn } = useModal();
  const handleLogIn = async (email, password) => {
    try {
      const auth = getAuth();
      await setPersistence(auth, browserSessionPersistence);
      const { user } = await signInWithEmailAndPassword(auth, email, password);

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

  return (
    <Tab.Panel className={`flex flex-col group flex-auto outline-none`}>
      <div className="mt-2 mb-4 nav-item relative pb-2">
        <p className="text-sm text-gray-500 ">{subtitle}</p>
      </div>
      <AuthForm button={button} handleClick={handleLogIn} error={error} />
    </Tab.Panel>
  );
};