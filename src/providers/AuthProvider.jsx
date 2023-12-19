import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
