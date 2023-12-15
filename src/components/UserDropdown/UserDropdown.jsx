import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react";
import { useModal } from "../../providers/ModalProvider";
import { useAuth } from "../../hooks/useAuth.jsx";

const UserDropdown = () => {
  const { modalState, setModalState } = useModal();
  const { isAuth } = useAuth();

  const btnAfterClass =
    "after:absolute after:top-0 after:left-0 after:w-full after:h-full border-b-[1px] border-white/25";
  const btnBeforeClass =
    "before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-lg-nav-t before:translate-y-[100%] before:opacity-0 before:transition before:duration-[0.4s]";
  const btnClass =
    "px-3 py-4  overflow-hidden rounded-b-2xl font-bold color-white opacity-80 hover:opacity-100 transition duration-[0.3s] relative group hover:before:opacity-100 hover:before:translate-y-[0] w-full text-headline-text";

  return (
    <Popover className="relative z-[100]">
      <Popover.Button className="text-white text-xl font-medium mobile:h-10 mobile:w-10 w-8 h-8 bg-blue rounded-full flex items-center justify-center outline-0">
        A
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="fixed right-0 left-auto z-100 mt-4 py-10 px-2 max-w-[300px] bg-lg-main shadow-bs-auth-dropdown w-full rounded-2xl">
          <div className="flex flex-col items-end">
            {!isAuth ? (
              <button
                onClick={() => setModalState(true)}
                type="button"
                className={`${btnClass} ${btnBeforeClass} ${btnAfterClass}`}
              >
                Log In
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className={`${btnClass} ${btnBeforeClass} ${btnAfterClass}`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setModalState(true)}
                  type="button"
                  className={`${btnClass} ${btnBeforeClass} ${btnAfterClass}`}
                >
                  Log Out
                </button>
              </>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default UserDropdown;
