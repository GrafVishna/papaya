import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useModal } from "../../providers/ModalProvider";
import TabsAuth from "./authTabs/TabsAuth";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { PiSmileySadThin } from "react-icons/pi";
import { BorderBtn } from "../buttons/BorderBtn";
import { IoCloseOutline } from "react-icons/io5";

export default function MyModal() {
  const { modalState, setModalState } = useModal();
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  function closeModal() {
    setModalState(false);
  }

  return (
    <>
      <Transition appear show={modalState} as={Fragment}>
        <Dialog as="div" className={`relative z-50 `} onClose={closeModal}>
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
                <Dialog.Panel className="mobile:static h-full fixed mobile:w-full mobile:max-w-md w-screen transform overflow-hidden p-[10px] mobile:p-[2px] mobile:rounded-2xl bg-lg-nav text-left align-middle shadow-bs-auth-modal transition-all">
                  <div className="rounded-2xl bg-lg-body overflow-auto mobile-s:p-10 px-4 py-10 h-full mobile:h-auto mobile:min-h-[520px]  flex flex-col">
                    <button
                      type="button"
                      onClick={() => setModalState(false)}
                      className="p-1 absolute top-5 right-5 rounded-full outline-none opacity-60 transition focus:opacity-100 hover:opacity-100"
                    >
                      <IoCloseOutline size={26} />
                    </button>
                    {!isAuth ? (
                      <TabsAuth />
                    ) : (
                      <>
                        <div className="flex-auto flex flex-col ">
                          <div className="mt-2 relative flex-auto text-center mb-20">
                            <h3 className="text-heading-h3 mb-4">Log Out</h3>
                            <p className="text-sm text-gray-400 nav-item pb-3">
                              Do you really want to get out of the account?
                            </p>
                            <span className="text-center pt-2 block text-gray-500 mb-4">
                              {email}
                            </span>
                            <span className="text-center flex justify-center">
                              <PiSmileySadThin
                                size={60}
                                className="text-gray-500"
                              />
                            </span>
                          </div>
                          <BorderBtn
                            content="Log Out"
                            handleClick={() => dispatch(removeUser())}
                          />
                        </div>
                      </>
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
