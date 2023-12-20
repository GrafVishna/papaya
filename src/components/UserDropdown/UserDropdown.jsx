import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useModal } from "../../providers/ModalProvider";
import { useAuth } from "../../hooks/useAuth";
import { BorderBtn } from "../buttons/BorderBtn";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";

const UserDropdown = () => {
  const { setModalSIn, setModalOut } = useModal();
  const { isAuth, photoURL, email } = useAuth();
  // uid, displayName, emailVerified
  // console.log(`uid: ${uid}`);
  // console.log(`name: ${uid}`);
  // console.log(`verified: ${emailVerified}`);
  return (
    <Popover className="relative z-[100]">
      {!isAuth ? (
        <Popover.Button className="text-white text-xl font-medium   rounded-full flex items-center justify-center outline-0">
          <HiOutlineHome className="mobile:text-[23px] text-[19px]" />
        </Popover.Button>
      ) : (
        <Popover.Button
          className="text-white relative text-xl font-medium mobile:h-10 mobile:w-10 w-8 h-8 bg-lg-avatar
         rounded-full overflow-hidden flex items-center justify-center outline-0"
        >
          {photoURL ? (
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={`${photoURL}`}
              alt=""
            />
          ) : (
            <HiOutlineUser className="mobile:text-[23px] text-[19px]" />
          )}
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
        <Popover.Panel className="fixed right-0 left-auto z-100 mt-4 py-10 px-2 max-w-[300px] bg-lg-main shadow-bs-auth-dropdown w-full rounded-2xl">
          <div className="flex flex-col items-end">
            {!isAuth ? (
              <BorderBtn
                content="Log In"
                handleClick={() => setModalSIn(true)}
              />
            ) : (
              <>
                <p className="text-center w-full text-sm text-gray-400 nav-item pb-8">
                  {email && email}
                </p>
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
