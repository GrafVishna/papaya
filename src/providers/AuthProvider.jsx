import { store } from "../store/index.js";
import { Provider, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";
import { setUser } from "../store/slices/userSlice.js";

export const AuthProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProviderSetUser>{children}</AuthProviderSetUser>
    </Provider>
  );
};

export const AuthProviderSetUser = ({ children }) => {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      };
      dispatch(setUser({ ...currentUser }));
    }
  });
  return <>{children}</>;
};
