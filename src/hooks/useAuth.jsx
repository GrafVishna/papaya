import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useModal } from "../providers/ModalProvider.jsx";

export const useAuth = () => {
  const { email, token, id, avatar } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
    avatar,
  };
};

export const useLogin = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { setModalSIn } = useModal();
  const { modalOut, setModalOut } = useModal();
  return {
    dispatch,
    error,
    setError,
    setModalSIn,
    modalOut,
    setModalOut,
  };
};
