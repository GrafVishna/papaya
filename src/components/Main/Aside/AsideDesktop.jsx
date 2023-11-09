import React from "react";
import {
  Downloads,
  History,
  Home,
  Logo,
  Music,
  Shorts,
  Subscriptions,
  Videos,
} from "../../Icons.jsx";
import NavItem from "./NavItem.jsx";
import SimpleBar from "simplebar-react";

export default function AsideDesktop() {
  return (
    <>
      <div className="py-3.5 w-full px-5 absolute top-16 left-0">
        <Logo className="w-28" />
      </div>
      <SimpleBar className="flex-auto max-h-full tablet:shadow-none shadow-bs-aside">
        <div className="tablet:h-full h-auto">
          <ul className="tablet:block flex">
            <NavItem text="Home" active={true}>
              <Home className="w-6 h-6" />
            </NavItem>
            <NavItem text="Shorts" active={false}>
              <Shorts className="w-6 h-6" />
            </NavItem>
            <NavItem text="Subscriptions">
              <Subscriptions className="w-6 h-6" />
            </NavItem>
            <NavItem text="Papaya Music">
              <Music className="w-6 h-6" />
            </NavItem>
          </ul>

          <div className="text-sm uppercase opacity-60 font-bold pb-3 pt-5 w-full px-5">
            <span>My Channel</span>
          </div>

          <ul className="tablet:block flex">
            <NavItem text="Library" className="before:hidden">
              <Home className="w-6 h-6" />
            </NavItem>
            <NavItem text="History">
              <Shorts className="w-6 h-6" />
            </NavItem>
            <NavItem text="Your Videos">
              <History className="w-6 h-6" />
            </NavItem>
            <NavItem text="Watch Later">
              <Videos className="w-6 h-6" />
            </NavItem>
            <NavItem text="Downloads">
              <Downloads className="w-6 h-6" />
            </NavItem>
          </ul>
        </div>
      </SimpleBar>
    </>
  );
}
