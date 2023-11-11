import React from "react";

export default function Time({ time }) {
  return (
    <span className="absolute bottom-4 right-4 bg-black py-1 px-1.5 rounded text-small leading-normal">
      {time}
    </span>
  );
}
