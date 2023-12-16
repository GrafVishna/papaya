import { useState } from "react";

export const DarkBtn = ({ handleClick, content }) => {
  const btnClassNames =
    "mobile-s:w-auto w-full inline-flex relative overflow-hidden border-none justify-center rounded-md border bg-video-subscription px-10 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-0 hover:before:translate-y-[0] focus:before:translate-y-[0]";
  const btnBeforeClassNames =
    " before:absolute before:pointer-events-none before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-lg-subscribe before:translate-y-[100%] before:transition before:duration-[0.4s]";

  return (
    <button
      onClick={handleClick && handleClick}
      type="button"
      className={`${btnClassNames} ${btnBeforeClassNames}`}
    >
      <span className="relative z-20 pointer-events-none">
        {content && content}
      </span>
    </button>
  );
};
