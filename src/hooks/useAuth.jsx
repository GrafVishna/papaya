import { useDispatch, useSelector } from "react-redux";

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
  return {
    dispatch,
  };
};
