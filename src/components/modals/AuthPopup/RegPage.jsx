import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice.js";
import { useModal } from "../../../providers/ModalProvider.jsx";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { AuthForm } from "./form/AuthForm.jsx";

export const RegPage = ({ subtitle, button }) => {
  const { setModalSIn } = useModal();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            name: user.name,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        setModalSIn(false);
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
      <AuthForm
        action="reg"
        button={button}
        handleClick={handleRegister}
        error={error}
      />
    </Tab.Panel>
  );
};