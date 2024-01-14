import React from "react";

export default function VideoTitle({ content, className }) {
  return (
    <h1
      className={`mobile:text-body-intro text-body-main font-bold ${
        className && className
      }`}
    >
      {content}
    </h1>
  );
}
