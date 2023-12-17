
import { PiSmileySadThin } from "react-icons/pi";
import { BorderBtn } from "../../buttons/BorderBtn.jsx";
import { removeUser } from "../../../store/slices/userSlice.js";


export const ConfirmationOut = ({email}) => {
  return (
    <div className="flex-auto flex flex-col ">
      <div className="mt-2 relative flex-auto text-center mb-20">
        <h3 className="text-heading-h3 mb-4">Sing Out</h3>
        <p className="text-sm text-gray-400 nav-item pb-3">
          Do you really want to get out of the account?
        </p>
        <span className="text-center pt-2 block text-gray-500 mb-4">
          {email}
        </span>
        <span className="text-center flex justify-center">
          <PiSmileySadThin size={60} className="text-gray-500" />
        </span>
      </div>
      <BorderBtn content="Log Out" handleClick={() => dispatch(removeUser())} />
    </div>
  );
};
