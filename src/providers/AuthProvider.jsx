import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice"; // Шлях до вашого slice для користувача

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      dispatch(setUser({ token: authToken }));
    }
  }, [dispatch]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
