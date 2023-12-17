import { Popover, Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react";
import { useModal } from "../../providers/ModalProvider";
import { useAuth } from "../../hooks/useAuth.jsx";
import { BorderBtn } from "../buttons/BorderBtn.jsx";

const UserDropdown = () => {
  const { setModalSIn, setModalOut } = useModal();
  const { isAuth } = useAuth();

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
              <BorderBtn
                content="Log In"
                handleClick={() => setModalSIn(true)}
              />
            ) : (
              <>
                <BorderBtn content="Profile" />
                <BorderBtn
                  content="Log Out"
                  handleClick={() => setModalOut(true)}
                />
              </>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default UserDropdown;