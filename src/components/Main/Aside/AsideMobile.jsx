import React from "react";
import NavItem from "./NavItem.jsx";
import { IHome, Music, IShorts, Subscriptions } from "../../Icons.jsx";

export default function AsideMobile() {
  return (
    <>
      <div className=" w-full shadow-bs-aside-m">
        <div className="h-auto w-full">
          <ul className="grid grid-cols-4 w-full">
            <NavItem text="Home" mobile={true} path="/">
              <IHome className="tablet:w-6 tablet:h-6 w-8 h-8" />
            </NavItem>
            <NavItem text="Shorts" mobile={true} path="shorts">
              <IShorts className="tablet:w-6 tablet:h-6 w-8 h-8" />
            </NavItem>
            <NavItem text="Subscriptions" mobile={true} path="subscriptions">
              <Subscriptions className="tablet:w-6 tablet:h-6 w-8 h-8" />
            </NavItem>
            <NavItem text="Papaya Music" mobile={true} path="music">
              <Music className="tablet:w-6 tablet:h-6 w-8 h-8" />
            </NavItem>
          </ul>
        </div>
      </div>
    </>
  );
}
