import { getAuth, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, googleAuthProvider } from "../firebase.js";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser != null) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, googleAuthProvider)
        .then((credentials) => setUser(credentials.user))
        .catch((e) => console.error(e));
    });

    return unSub;
  }, [auth]);

  return children;
};

export default AuthProvider;
