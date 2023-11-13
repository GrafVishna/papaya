import React from "react";
import data from "../../../testData/testData.json";

export default function VideoTitle({ content, className }) {
  return (
    <h1 className={`text-body-intro font-bold ${className && className}`}>
      {content}
    </h1>
  );
}
