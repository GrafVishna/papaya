import { Tab } from "@headlessui/react";
import { AuthForm } from "./form/AuthForm";
import { Welcome } from "./Welcome";
import { useAuth } from "../../../hooks/useAuth";
import { registerUser } from "../../../services/userFirebaseReg.js";
import { useAuthErrors } from "../../../hooks/useAuthErrors";
import { useModal } from "../../../providers/ModalProvider";
import { RegForm } from "./form/RegForm.jsx";
import { useDispatch } from "react-redux";

export const RegPage = ({ subtitle, button }) => {
  const { setError, error } = useAuthErrors();
  const { isAuth, email } = useAuth();
  const { setModalSIn } = useModal();
  const dispatch = useDispatch();
  const handleRegister = async (email, password) => {
    await registerUser({
      setModalSIn,
      dispatch,
      setError,
      email,
      password,
    });
  };

  return !isAuth ? (
    <Tab.Panel className="flex flex-col flex-auto outline-none">
      <div className="mt-2 mb-4 nav-item relative pb-2">
        <p className="text-sm text-gray-500 ">{subtitle}</p>
      </div>
      <RegForm
        button={button}
        handleClick={handleRegister}
        type="registration"
        error={error}
      />
    </Tab.Panel>
  ) : (
    <Welcome show={isAuth} email={email} />
  );
};
