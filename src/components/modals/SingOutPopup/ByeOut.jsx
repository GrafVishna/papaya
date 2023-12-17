import { PiHandThin } from "react-icons/pi";
import { PopupTransition } from "../../transitions/PopupTransition.jsx";

export const ByeOut = ({ show }) => {
  return (
    <PopupTransition show={show.toString()}>
      <div className="flex-auto flex flex-col ">
        <div className="mt-2 relative flex flex-col flex-auto text-center mb-20">
          <h3 className="text-heading-h3 mb-4">Bye!</h3>
          <p className="text-sm text-gray-400 nav-item pb-3">
            See you soon! We look forward to seeing you back!
          </p>
          <span className="text-center flex flex-auto items-center justify-center">
            <PiHandThin size={100} className="text-gray-500" />
          </span>
        </div>
      </div>
    </PopupTransition>
  );
};
