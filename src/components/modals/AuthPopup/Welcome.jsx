import { PopupTransition } from "../../transitions/PopupTransition.jsx";
import { PiSmileyThin } from "react-icons/pi";

export const Welcome = ({ show, email }) => {
  return (
    <PopupTransition show={show.toString()}>
      <div className="flex-auto flex flex-col ">
        <div className="mt-2 relative  flex flex-col flex-auto text-center ">
          <h3 className="text-heading-h3 mb-4">Hello!</h3>
          <p className="text-sm text-gray-400 nav-item pb-3">Welcome to us.</p>
          <span className="text-center  pt-2 block text-gray-500 mb-4">
            {email && email}
          </span>
          <span className="text-center flex-auto items-center flex justify-center">
            <PiSmileyThin size={120} className="text-gray-500" />
          </span>
        </div>
      </div>
    </PopupTransition>
  );
};
