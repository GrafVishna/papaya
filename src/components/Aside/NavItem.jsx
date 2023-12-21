import React from "react";
import RButton from "../buttons/RButton.jsx";
import { NavLink, Route, Routes } from "react-router-dom";

export default function NavItem({ children, className, text, mobile, path }) {
  return (
    <>
      <li
        className={`nav-item ${className ? className : ""} ${
          mobile && "mobile"
        }`}
      >
        <NavLink to={path} className={`nav-link ${mobile && "justify-center"}`}>
          <RButton tag="span" className="tablet:w-8 tablet:h-8 w-10 h-10">
            {children}
          </RButton>
          <span className={`z-20 ${mobile && "hidden"}`}>{text}</span>
        </NavLink>
      </li>
    </>
  );
}
