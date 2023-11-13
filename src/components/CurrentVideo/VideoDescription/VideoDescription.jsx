import React from "react";

export default function VideoDescription({ decryption }) {
  return (
    <div className="pt-8 relative bg-lg-decryption before:absolute before:h-[1px] before:w-full before:bg-lg-line before:top-0 before:left-0">
      <div className="opacity-60 font-[600] mb-1">
        <div>14K views - 1 mount ago</div>
        <div>
          <p>{decryption}</p>
        </div>
      </div>
    </div>
  );
}
