import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useModal } from "../../providers/ModalProvider.jsx";
import TabsAuth from "./authTabs/TabsAuth";
import { useAuth } from "../../hooks/useAuth.jsx";
import { removeUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

export default function MyModal() {
  const { modalState, setModalState } = useModal();
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  const btnAfterClass =
    "after:absolute after:top-0 after:left-0 after:w-full after:h-full border-b-[1px] border-white/25";
  const btnBeforeClass =
    "before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-lg-nav-t before:translate-y-[100%] before:opacity-0 before:transition before:duration-[0.4s]";
  const btnClass =
    "px-3 py-4  overflow-hidden rounded-b-2xl font-bold color-white opacity-80 hover:opacity-100 transition duration-[0.3s] relative group hover:before:opacity-100 hover:before:translate-y-[0] w-full text-headline-text";

  function closeModal() {
    setModalState(false);
  }

  return (
    <>
      <Transition appear show={modalState} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-md transform overflow-hidden p-[2px] rounded-2xl bg-lg-nav text-left align-middle shadow-bs-auth-modal transition-all">
                  <div className="rounded-2xl bg-lg-body p-10 min-h-[450px] flex flex-col">
                    {!isAuth ? (
                      <TabsAuth />
                    ) : (
                      <div className="flex-auto flex flex-col">
                        <div className="mt-2 relative flex-auto text-center mb-20">
                          <h3 className="text-heading-h3 mb-4">Log Out</h3>
                          <p className="text-sm text-gray-400 nav-item pb-2">
                            Do you really want to get out of the account?
                          </p>
                          <span className="text-center pt-2 text-gray-500">
                            {email}
                          </span>
                        </div>
                        <button
                          onClick={() => dispatch(removeUser())}
                          type="button"
                          className={`${btnClass} ${btnBeforeClass} ${btnAfterClass}`}
                        >
                          Log Out
                        </button>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
