import { Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import { useAuth, useLogin } from "../../../hooks/useAuth.jsx";
import { IoCloseOutline } from "react-icons/io5";
import { ConfirmationOut } from "./ConfirmationOut.jsx";
import { ByeOut } from "./ByeOut.jsx";
import { MainPopupTransition } from "../../transitions/MainPopupTransition.jsx";

export const SingOutPopup = () => {
  const { modalOut, setModalOut } = useLogin();
  const { isAuth, email } = useAuth();

  return (
    <>
      <MainPopupTransition show={modalOut} onClose={() => setModalOut(false)}>
        <Dialog.Panel className="mobile:static h-full fixed mobile:w-full mobile:max-w-md w-screen transform overflow-hidden p-[15px] mobile:p-[2px] mobile:rounded-2xl bg-lg-nav text-left align-middle shadow-bs-auth-modal transition-all">
          <div className="rounded-2xl bg-lg-body overflow-auto mobile-s:p-10 px-4 py-10 h-full mobile:h-auto mobile:min-h-[520px]  flex flex-col shadow-bs-filter">
            <button
              type="button"
              onClick={() => setModalOut(false)}
              className="p-1 absolute top-5 right-5 rounded-full outline-none opacity-60 transition focus:opacity-100 hover:opacity-100"
            >
              <IoCloseOutline size={26} />
            </button>
            {isAuth ? (
              <ConfirmationOut email={email} />
            ) : (
              <ByeOut show={isAuth} />
            )}
          </div>
        </Dialog.Panel>
      </MainPopupTransition>
    </>
  );
};
