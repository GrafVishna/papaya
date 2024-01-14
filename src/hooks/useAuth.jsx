import { useSelector } from "react-redux";

export const useAuth = () => {
  const user = useSelector((state) => state.user);
  const isAuth = user && !!user.uid;

  return {
    isAuth,
    ...user,
  };
};
export const useCurrentUser = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return {
    ...currentUser,
  };
};
