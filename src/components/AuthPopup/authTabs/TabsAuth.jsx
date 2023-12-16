import { Tab } from "@headlessui/react";
import { TabsNavBtn } from "./TabsNavBtn.jsx";
import { LoginPage } from "../form/LoginPage.jsx";
import { RegPage } from "../form/RegPage.jsx";

const TabsAuth = () => {
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
        <LoginPage subtitle={subtitleLogIn} button="Log In" />
        <RegPage subtitle={subtitleSing} button="Sign Up" />
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabsAuth;
