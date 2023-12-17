export const TextInput = ({
  placeholder,
  type,
  setAction,
  value,
  error,
  errorMsg,
}) => {
  console.log(error);
  return (
    <div className="mb-4 last:mb-0 relative">
      <input
        type={type}
        placeholder={placeholder}
        className="shadow-input input"
        value={value}
        onChange={(e) => setAction(e.target.value)}
      />
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
