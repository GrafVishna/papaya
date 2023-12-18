import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useModal } from "../../../providers/ModalProvider.jsx";
import TabsAuth from "./authTabs/TabsAuth.jsx";
import { useAuth } from "../../../hooks/useAuth.jsx";
import { IoCloseOutline } from "react-icons/io5";
import { Welcome } from "./Welcome.jsx";
import { MainPopupTransition } from "../../transitions/MainPopupTransition.jsx";

export default function MyModal() {
  const { modalIn, setModalSIn } = useModal();
  const { isAuth, email } = useAuth();

  return (
    <>
      <MainPopupTransition show={modalIn} onClose={() => setModalSIn(false)}>
        <Dialog.Panel className="mobile:static h-full fixed mobile:w-full mobile:max-w-md w-screen transform overflow-hidden p-[15px] mobile:p-[2px] mobile:rounded-2xl bg-lg-nav text-left align-middle shadow-bs-auth-modal transition-all">
          <div className="shadow-bs-filter rounded-2xl bg-lg-body overflow-auto mobile-s:p-10 px-4 py-10 h-full mobile:h-auto mobile:min-h-[520px]  flex flex-col">
            <button
              type="button"
              onClick={() => setModalSIn(false)}
              className="p-1 absolute top-5 right-5 rounded-full outline-none opacity-60 transition focus:opacity-100 hover:opacity-100"
            >
              <IoCloseOutline size={26} />
            </button>
            {!isAuth ? <TabsAuth /> : <Welcome show={isAuth} email={email} />}
          </div>
        </Dialog.Panel>
      </MainPopupTransition>
    </>
  );
}
