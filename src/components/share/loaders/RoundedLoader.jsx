export const RoundedLoader = ({ show, className }) => {
  return (
    <span
      className={`${
        show ? "opacity-60" : "opacity-0"
      } loading loading-spinner loading-md absolute right-3 top-3  pointer-events-none duration-300 ${
        className && className
      }`}
    ></span>
  );
};
