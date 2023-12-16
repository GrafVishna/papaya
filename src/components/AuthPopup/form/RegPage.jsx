import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice.js";
import { useModal } from "../../../providers/ModalProvider.jsx";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { AuthForm } from "./AuthForm.jsx";

export const RegPage = ({ subtitle, button }) => {
  const { modalState, setModalState } = useModal();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        setModalState(false);
      })
      .catch((error) => {
        console.error("Firebase Authentication Error:", error);
        setError(error.code);
      });
  };
  return (
    <Tab.Panel className="flex flex-col flex-auto outline-none">
      <div className="mt-2 mb-4 nav-item relative pb-2">
        <p className="text-sm text-gray-500 ">{subtitle}</p>
      </div>
      <AuthForm button={button} handleClick={handleRegister} error={error} />
    </Tab.Panel>
  );
};
