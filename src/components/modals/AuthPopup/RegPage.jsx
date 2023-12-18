import { useModal } from "../../../providers/ModalProvider.jsx";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { AuthForm } from "./form/AuthForm.jsx";
import { Welcome } from "./Welcome.jsx";
import { useAuth } from "../../../hooks/useAuth.jsx";
import { registerUser } from "../../../utils/reg.js";

export const RegPage = ({ subtitle, button }) => {
  const { setModalSIn } = useModal();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { isAuth, email } = useAuth();

  const handleRegister = async (email, password) => {
    await registerUser(dispatch, setModalSIn, setError, email, password);
  };
  return !isAuth ? (
    <Tab.Panel className="flex flex-col flex-auto outline-none">
      <div className="mt-2 mb-4 nav-item relative pb-2">
        <p className="text-sm text-gray-500 ">{subtitle}</p>
      </div>
      <AuthForm button={button} handleClick={handleRegister} error={error} />
    </Tab.Panel>
  ) : (
    <Welcome show={isAuth} email={email} />
  );
};
