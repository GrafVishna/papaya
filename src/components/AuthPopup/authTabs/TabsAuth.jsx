import { Tab } from "@headlessui/react";
import { TabsNavBtn } from "./TabsNavBtn.jsx";
import { AuthForm } from "./AuthForm.jsx";
import { setUser } from "../../../store/slices/userSlice.js";

import { useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const TabsAuth = () => {
  const dispatch = useDispatch();

  const handleLogIn = (email, password, error) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
      })
      .catch();
  };

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
      })
      .catch(console.error);
  };

  const subtitleSing =
    "Join us today! Register with your email and create a password, or effortlessly sign up using your Google account. Seamless registration for your convenience.";
  const subtitleLogIn =
    "Welcome to the site! Log in using your email and password or with one click via your Google account. Accessibility and convenience in one.";
  return (
    <Tab.Group>
      <Tab.List className="flex gap-8 w-full justify-center nav-item relative">
        <TabsNavBtn content="Log In" />
        <TabsNavBtn content="Sign Up" />
      </Tab.List>

      <Tab.Panels className="flex-auto flex flex-col outline-amber-500">
        <AuthForm
          subtitle={subtitleLogIn}
          button="Log In"
          handleClick={handleLogIn}
        />
        <AuthForm
          subtitle={subtitleSing}
          button="Sign Up"
          handleClick={handleRegister}
        />
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabsAuth;
