import { Round } from "../../Icons.jsx";
import { RoundedLoader } from "../loaders/RoundedLoader.jsx";

export const TextInput = ({
  placeholder,
  type,
  setAction,
  value,
  error,
  errorMsg,
  isLoading,
}) => {
  return (
    // mb-4 last:mb-0
    <div className="relative">
      <input
        required
        type={type}
        placeholder={placeholder}
        className="shadow-input input"
        autoComplete="null"
        value={value}
        onChange={(e) => setAction(e.target.value)}
      />
      <RoundedLoader show={isLoading} />
      <p
        className={`${
          error ? "block" : "hidden"
        } text-error/75 absolute -bottom-2 text-small right-2`}
      >
        {errorMsg}
      </p>
    </div>
  );
};
