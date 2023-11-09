import React from "react";
import RButton from "../../RButton/RButton.jsx";

export default function NavItem({
  children,
  className,
  text,
  active,
  rotate,
  mobile,
}) {
  const pseudo =
    "before:absolute after:hidden  before:opacity-60 after:opacity-50 before:top-0 before:left-0 before:h-[1px] before:w-full before:bg-lg-line before:bg-blend-overlay last:after:absolute last:after:bottom-0 last:after:left-0 last:after:h-[1px] last:after:w-full last:after:bg-lg-line last:after:bg-blend-overlay";

  const btn =
    "flex text-14 tablet-big:text-17 font-bold leading-normal gap-3 tablet-big:gap-5 items-center px-3 tablet-big:px-5 py-2 w-full relative hover:opacity-100 transition duration-300";

  const activeClass = `${active ? "opacity-100 bg-lg-nav" : "opacity-60"}`;

  return (
    <li
      className={`relative h-14 group ${pseudo} ${className ? className : ""} ${
        mobile && "justify-self-center w-full justify-center"
      }`}
    >
      <button className={`${activeClass} ${btn} ${mobile && "justify-center"}`}>
        <RButton
          active={active}
          rotate={active}
          tag="span"
          className="tablet:w-8 tablet:h-8 w-10 h-10"
        >
          {children}
        </RButton>{" "}
        <span className={`${mobile && "hidden"}`}>{text}</span>
      </button>
    </li>
  );
}
