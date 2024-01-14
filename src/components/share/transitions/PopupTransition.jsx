import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export const PopupTransition = ({ children, show }) => {
  return (
    <Transition.Child
      show={show}
      as={Fragment}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  );
};
