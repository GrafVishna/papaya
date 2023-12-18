import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

const AuthContext = createContext();
const API_KEY = import.meta.env.VITE_API_KEY;
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(
      sessionStorage.getItem(`firebase:authUser:${API_KEY}:[DEFAULT]`),
    );
    if (storedUser) {
      dispatch(
        setUser({
          email: storedUser.email,
          token: storedUser.token,
          id: storedUser.id,
          avatar: storedUser.photoURL,
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
