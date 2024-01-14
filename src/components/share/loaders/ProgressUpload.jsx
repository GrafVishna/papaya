import React from "react";

export const ProgressUpload = ({ isUpload }) => {
  return (
    <progress
      className={`${
        isUpload < 100 ? "opacity-100" : "opacity-0"
      } transition duration-300 progress w-3/4 absolute top-1/2 z-20 pointer-events-none`}
      value={isUpload}
      max="100"
    ></progress>
  );
};
