import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice"; // Шлях до вашого slice для користувача

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      // Якщо токен існує, виконати автоматичну авторизацію
      // Тут вам може знадобитися додаткова логіка для перевірки та оновлення токену
      dispatch(setUser({ token: authToken }));
    }
  }, [dispatch]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
