import { RoundedLoader } from "../loaders/RoundedLoader.jsx";

export const TextArea = ({
  placeholder,
  type,
  setAction,
  value,
  error,
  errorMsg,
  isLoading,
}) => {
  return (
    <div className="mb-4 last:mb-0 relative ">
      <textarea
        required
        placeholder={placeholder}
        className="shadow-input input pt-2 resize-none h-[150px] border border-white"
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
