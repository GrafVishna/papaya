import { ERR_CREDENTIAL } from "./authErrors.js";

export const ErrorMessage = ({ error, errorType, message }) => {
  return (
    <p
      className={`${
        error === errorType ? "block" : "hidden"
      } text-error/75 text-center text-small pr-2`}
    >
      {message}
    </p>
  );
};
