import { store } from "../store/index.js";
import { Provider } from "react-redux";

export const AuthProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
