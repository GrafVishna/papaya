import React from "react";

export default function GridElementTitle({ content }) {
  return (
    <h3 className="text-default tablet:text-headline-text font-bold cursor-pointer tracking-minus-03 flex-auto h-full">
      {content}
    </h3>
  );
}
