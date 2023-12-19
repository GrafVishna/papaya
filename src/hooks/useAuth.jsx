import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useModal } from "../providers/ModalProvider.jsx";

export const useAuth = () => {
  const user = useSelector((state) => state.user);
  const isAuth = !!user.uid;
  return {
    isAuth: isAuth,
    ...user,
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
