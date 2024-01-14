import { store } from "../store/index.js";
import { Provider, useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice.js";
import { setCurrentUser } from "../store/slices/currentUserSlice.js";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";

export const AuthProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProviderSetUser>{children}</AuthProviderSetUser>
    </Provider>
  );
};

export const AuthProviderSetUser = ({ children }) => {
  const dispatch = useDispatch();
  const userStorage = localStorage.getItem("user");

  if (userStorage) {
    const uid = JSON.parse(userStorage).uid;
    dispatch(setUser(JSON.parse(userStorage)));

    useEffect(() => {
      const fetchData = async () => {
        try {
          const unsubscribe = onSnapshot(
            doc(db, "users", uid),
            (docSnapshot) => {
              dispatch(setCurrentUser(docSnapshot.data()));
            },
          );

          return () => unsubscribe();
        } catch (err) {
          console.error(err);
        }
      };

      fetchData();
    }, [uid]);
  }
  return <>{children}</>;
};
