import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice"; // Шлях до вашого slice для користувача

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("papaya_user"));
    if (storedUser) {
      dispatch(
        setUser({
          name: storedUser.name,
          email: storedUser.email,
          token: storedUser.token,
          id: storedUser.id,
        }),
      );
    } else {
      console.log("No token");
    }
  }, [dispatch]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
