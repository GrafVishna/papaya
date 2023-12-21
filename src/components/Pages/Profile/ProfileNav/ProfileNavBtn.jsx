export const ProfileNavBtn = ({ text, handleClick, icon, active }) => {
  return (
    <button
      onClick={handleClick && handleClick}
      className={`flex gap-3 items-center justify-center px-8 py-4 flex-auto text-center text-gray-400 font-bold hover:text-white transition duration-[0.2s] `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};
