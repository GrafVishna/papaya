import React from "react";
import NavItem from "./NavItem.jsx";
import {
  Downloads,
  History,
  Home,
  Music,
  Shorts,
  Subscriptions,
  Videos,
} from "../../Icons.jsx";
import SimpleBar from "simplebar-react";

export default function AsideMobile() {
  return (
    <>
      <div className=" w-full shadow-bs-aside-m">
        <div className="h-auto w-full">
          <ul className="grid grid-cols-4 w-full">
            <NavItem text="Home" active={true} mobile={true}>
              <Home className="tablet:w-6 tablet:h-6 w-8 h-8" />
            </NavItem>
            <NavItem text="Shorts" mobile={true}>
              <Shorts className="tablet:w-6 tablet:h-6 w-8 h-8" />
            </NavItem>
            <NavItem text="Subscriptions" mobile={true}>
              <Subscriptions className="tablet:w-6 tablet:h-6 w-8 h-8" />
            </NavItem>
            <NavItem text="Papaya Music" mobile={true}>
              <Music className="tablet:w-6 tablet:h-6 w-8 h-8" />
            </NavItem>
          </ul>
        </div>
      </div>
    </>
  );
}
