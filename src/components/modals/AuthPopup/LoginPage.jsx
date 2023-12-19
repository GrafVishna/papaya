import { useDispatch } from "react-redux";
import { Tab } from "@headlessui/react";
import { AuthForm } from "./form/AuthForm.jsx";
import { auth } from "../../../firebase.js";
import { signInWithGoogle } from "../../../utils/googleAuthUtils.js";
import { authUser } from "../../../utils/login.js";
import { useLogin } from "../../../hooks/useAuth.jsx";

export const LoginPage = ({ subtitle, button }) => {
  const { setModalSIn, dispatch, setError, error } = useLogin();

  const handleLogIn = async (email, password) => {
    await authUser(dispatch, setModalSIn, setError, email, password);
  };

  const handleLogInGoogle = async () => {
    await signInWithGoogle(auth, dispatch, setModalSIn);
  };

  return (
    <Tab.Panel className={`flex flex-col group flex-auto outline-none`}>
      <div className="mt-2 mb-4 nav-item relative pb-2">
        <p className="text-sm text-gray-500 ">{subtitle}</p>
      </div>
      <AuthForm
        button={button}
        handleClick={handleLogIn}
        handleLogInGoogle={handleLogInGoogle}
        error={error}
      />
    </Tab.Panel>
  );
};
