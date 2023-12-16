import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice.js";
import { useModal } from "../../../providers/ModalProvider.jsx";
import { useDispatch } from "react-redux";
import { Tab } from "@headlessui/react";
import { AuthForm } from "./AuthForm.jsx";
import { useState } from "react";

export const LoginPage = ({ subtitle, button }) => {
  const { modalState, setModalState } = useModal();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleLogIn = async (email, password) => {
    try {
      const auth = getAuth();

      // Встановлення persistence, наприклад, якщо ви хочете зберігати сесії на всю сесію браузера
      await setPersistence(auth, browserLocalPersistence);

      // Реєстрація користувача з використанням вже встановленого persistence
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }),
      );

      setTimeout(() => {
        setModalState(false);
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
