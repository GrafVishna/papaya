import { useState } from "react";
import { Tab } from "@headlessui/react";
import GoogleBtn from "../../buttons/GoogleBtn.jsx";
import { useModal } from "../../../providers/ModalProvider.jsx";

export const AuthForm = ({ subtitle, button, handleClick }) => {
  const btnClassNames =
    "inline-flex relative overflow-hidden border-none justify-center rounded-md border bg-video-subscription px-10 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-0 hover:before:translate-y-[0] focus:before:translate-y-[0]";
  const btnBeforeClassNames =
    " before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-lg-subscribe before:translate-y-[100%] before:transition before:duration-[0.4s]";
  const { modalState, setModalState } = useModal();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Tab.Panel className="flex flex-col flex-auto outline-none">
      <div className="mt-2 mb-4 nav-item relative pb-2">
        <p className="text-sm text-gray-500 ">{subtitle}</p>
      </div>
      <div className="flex-auto">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="shadow-input input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="password"
            placeholder="Password"
            className="shadow-input input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => {
            handleClick(email, pass);
            setModalState(false);
          }}
          type="button"
          className={`${btnClassNames} ${btnBeforeClassNames}`}
        >
          <span className="relative z-20">{button}</span>
        </button>

        <GoogleBtn />
      </div>
    </Tab.Panel>
  );
};
