import React, { useRef } from "react";
import {
  Downloads,
  History,
  IHome,
  Logo,
  Music,
  IShorts,
  Subscriptions,
  Videos,
} from "../../Icons.jsx";
import NavItem from "./NavItem.jsx";
import UseScroll from "../../../hooks/UseScroll.jsx";

export default function AsideDesktop({ ref }) {
  const asideRef = useRef();
  UseScroll(asideRef);

  return (
    <>
      <div className="py-3.5 w-full px-5 absolute top-16 left-0">
        <Logo className="w-28" />
      </div>
      <div
        ref={asideRef}
        className="flex-auto max-h-full tablet:shadow-none shadow-bs-aside"
      >
        <div className="tablet:h-full h-auto">
          <ul className="tablet:block flex">
            <NavItem text="Home" path="/">
              <IHome className="w-6 h-6" />
            </NavItem>
            <NavItem text="Shorts" path="shorts">
              <IShorts className="w-6 h-6" />
            </NavItem>
            <NavItem text="Subscriptions" path="subscriptions">
              <Subscriptions className="w-6 h-6" />
            </NavItem>
            <NavItem text="Papaya Music" path="music">
              <Music className="w-6 h-6" />
            </NavItem>
          </ul>

          <div className="text-sm uppercase opacity-60 font-bold pb-3 pt-5 w-full px-5">
            <span>My Channel</span>
          </div>

          <ul className="tablet:block flex">
            <NavItem text="Library" path="library" className="before:hidden">
              <Music className="w-6 h-6" />
            </NavItem>
            <NavItem text="History" path="history">
              <History className="w-6 h-6" />
            </NavItem>
            <NavItem text="Your Videos" path="your_videos">
              <History className="w-6 h-6" />
            </NavItem>
            <NavItem text="Watch Later" path="watch_later">
              <Videos className="w-6 h-6" />
            </NavItem>
            <NavItem text="Downloads" path="downloads">
              <Downloads className="w-6 h-6" />
            </NavItem>
          </ul>
        </div>
      </div>
    </>
  );
}
