import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModal } from "../../providers/ModalProvider.jsx";

export const MainPopupTransition = ({ children, show, onClose }) => {
  const { modalIn, setModalSIn } = useModal();
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className={`relative z-50 `} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto group">
          <div className="mobile:flex min-h-full items-center justify-center mobile:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {children}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
