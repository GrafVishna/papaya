import { removeUser } from "../../../store/slices/userSlice.js";
import React from "react";

export const BorderBtn = ({ handleClick, content }) => {
  const btnAfterClass =
    "after:absolute after:top-0 after:left-0 after:w-full after:h-full border-b-[1px] border-white/25";
  const btnBeforeClass =
    "before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-lg-nav-t before:translate-y-[100%] before:opacity-0 before:transition before:duration-[0.4s]";
  const btnClass =
    "px-3 py-4  overflow-hidden rounded-b-2xl font-bold color-white opacity-80 hover:opacity-100 transition duration-[0.3s] relative group hover:before:opacity-100 hover:before:translate-y-[0] w-full text-headline-text";

  return (
    <button
      onClick={handleClick && handleClick}
      type="button"
      className={`${btnClass} ${btnBeforeClass} ${btnAfterClass}`}
    >
      {content}
    </button>
  );
};
