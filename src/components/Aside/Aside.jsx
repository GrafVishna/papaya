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
} from "../Icons.jsx";
import { useMatchMedia } from "../../hooks/useMatchMedia.jsx";
import AsideMobile from "./AsideMobile.jsx";
import AsideDesktop from "./AsideDesktop.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Shorts from "../Pages/Shorts/Shorts.jsx";
import App from "../App.jsx";

export default function Aside() {
  // Media
  const queries = [
    "(max-width: 990px)",
    "(min-width: 991px) and (max-width: 1199px)",
    "(min-width: 1200px)",
  ];
  const { isMobile } = useMatchMedia(queries);

  // Class

  const mobileClass = "min-w-auto bg-lg-main w-screen h-auto bottom-0";
  const desktopClass =
    "tablet:pt-[120px] fixed tablet:h-screen tablet:top-0 tablet:left-0 tablet:w-[200px] tablet-big:w-[240px] tablet:z-40";

  // ====

  return (
    <>
      <aside className={`aside ${mobileClass} ${desktopClass}`}>
        {!isMobile ? (
          <div className="py-3.5 w-full px-5 absolute top-16 left-0">
            <Logo className="w-28" />
          </div>
        ) : (
          ""
        )}

        {!isMobile ? <AsideDesktop /> : <AsideMobile />}
      </aside>
    </>
  );
}
