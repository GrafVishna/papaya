import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useModal } from "../../../providers/ModalProvider.jsx";
import { useAuth } from "../../../hooks/useAuth.jsx";
import { removeUser } from "../../../store/slices/userSlice.js";
import { useDispatch } from "react-redux";
import { PiSmileySadThin } from "react-icons/pi";
import { BorderBtn } from "../../buttons/BorderBtn.jsx";
import { IoCloseOutline } from "react-icons/io5";
import { PiHandThin } from "react-icons/pi";

export const SingOutPopup = () => {
  const { modalOut, setModalOut } = useModal();
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <Transition appear show={modalOut} as={Fragment}>
        <Dialog
          as="div"
          className={`relative z-50 `}
          onClose={() => setModalOut(false)}
        >
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
                      onClick={() => setModalOut(false)}
                      className="p-1 absolute top-5 right-5 rounded-full outline-none opacity-60 transition focus:opacity-100 hover:opacity-100"
                    >
                      <IoCloseOutline size={26} />
                    </button>
                    <div className="flex-auto flex flex-col ">
                      <div className="mt-2 relative flex-auto text-center mb-20">
                        <h3 className="text-heading-h3 mb-4">
                          {isAuth ? "Sing Out" : "Bye."}
                        </h3>
                        <p className="text-sm text-gray-400 nav-item pb-3">
                          {isAuth
                            ? "Do you really want to get out of the account?"
                            : "See you later."}
                        </p>
                        <span className="text-center pt-2 block text-gray-500 mb-4">
                          {email}
                        </span>
                        <span className="text-center flex justify-center">
                          {isAuth ? (
                            <PiSmileySadThin
                              size={60}
                              className="text-gray-500"
                            />
                          ) : (
                            <PiHandThin size={60} className="text-gray-500" />
                          )}
                        </span>
                      </div>
                      {isAuth ? (
                        <BorderBtn
                          content="Log Out"
                          handleClick={() => dispatch(removeUser())}
                        />
                      ) : null}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
