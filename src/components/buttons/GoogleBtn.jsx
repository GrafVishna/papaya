import { FcGoogle } from "react-icons/fc";

const GoogleBtn = ({ handleClick, content }) => {
  return (
    <button
      onClick={handleClick && handleClick}
      type="button"
      className="inline-flex relative items-center gap-3 border-none overflow-hidden justify-center rounded-md border bg-video-subscription px-10 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-0 hover:before:translate-y-[0] focus:before:translate-y-[0]
      before:absolute before:pointer-events-none before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-lg-subscribe before:translate-y-[100%] before:transition before:duration-[0.4s]"
    >
      <FcGoogle className="relative z-20 pointer-events-none" size={20} />
      <span className="relative z-20 pointer-events-none">
        {content ? content : "Google"}
      </span>
    </button>
  );
};

export default GoogleBtn;
