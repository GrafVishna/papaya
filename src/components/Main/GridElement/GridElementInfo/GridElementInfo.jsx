import React from "react";

export default function GridElementInfo({ views, date }) {
  return (
    <div className="">
      <span>{views}</span> views - <span>{date}</span> month ago
    </div>
  );
}
