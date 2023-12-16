export const TextInput = ({ placeholder, type, setAction, value, error }) => {
  return (
    <div className="mb-4 last:mb-0 relative">
      <input
        type={type}
        placeholder={placeholder}
        className="shadow-input input"
        value={value}
        onChange={(e) => setAction(e.target.value)}
      />
      <p className="hidden group-[.error-email]:block text-error/75 absolute -bottom-2 text-small right-2">
        {error}
      </p>
    </div>
  );
};
