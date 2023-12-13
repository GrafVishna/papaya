import React from "react";
import { NavLink } from "react-router-dom";

export default function GridElementTitle({ content, link }) {
  return (
    <NavLink
      to={link}
      className="text-default tablet:text-headline-text font-bold cursor-pointer tracking-minus-03 flex-auto h-full"
    >
      {content}
    </NavLink>
  );
}
