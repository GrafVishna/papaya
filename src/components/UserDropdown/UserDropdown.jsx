import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useModal } from "../../providers/ModalProvider";
import { useAuth } from "../../hooks/useAuth";
import { BorderBtn } from "../buttons/BorderBtn";
import { IoIosMenu } from "react-icons/io";

import { Avatar } from "./Avatar.jsx";
import { NavLink } from "react-router-dom";

const UserDropdown = () => {
  const { setModalSIn, setModalOut } = useModal();
  const { isAuth, displayName, email } = useAuth();

  return (
    <Popover className="relative z-[100] mobile:h-10 mobile:w-10 w-8 h-8 mobile:text-[24px] text-[18px]">
      {!isAuth ? (
        <Popover.Button className="text-white h-[100%] w-[100%] bg-lg-avatar text-xl font-medium rounded-full flex items-center justify-center outline-0">
          <IoIosMenu className="" />
        </Popover.Button>
      ) : (
        <Popover.Button
          className="text-white relative text-xl font-medium h-[100%] w-[100%] bg-lg-avatar
         rounded-full overflow-hidden flex items-center justify-center outline-0"
        >
          <Avatar size="100%" />
        </Popover.Button>
      )}

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="fixed right-4 left-auto z-100 mt-4 py-10 px-2 max-w-[300px] bg-lg-main shadow-bs-auth-dropdown w-full rounded-2xl">
          <div className="flex flex-col items-end">
            {!isAuth ? (
              <BorderBtn
                content="Log In"
                handleClick={() => setModalSIn(true)}
              />
            ) : (
              <>
                <div className="text-center flex flex-col items-center gap-5 w-full text-body-main text-gray-400 nav-item pb-4 mb-8">
                  <Avatar size="100px" font="35px" />
                  <span>{displayName ? displayName : email}</span>
                </div>
                <NavLink to="/profile" className="w-full">
                  <BorderBtn content="Profile" />
                </NavLink>
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
