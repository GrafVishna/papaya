import { Tab } from "@headlessui/react";
import { AuthForm } from "./form/AuthForm.jsx";
import { authUser } from "../../../utils/login.js";
import { useLogin } from "../../../hooks/useAuth.jsx";
import { useAuthErrors } from "../../../hooks/useAuthErrors.jsx";
import { useModal } from "../../../providers/ModalProvider.jsx";

export const LoginPage = ({ subtitle, button }) => {
  const { setError, error } = useAuthErrors();
  const { setModalSIn } = useModal();
  const { dispatch } = useLogin();

  const handleLogIn = async (email, password) => {
    await authUser(dispatch, setModalSIn, setError, email, password);
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
