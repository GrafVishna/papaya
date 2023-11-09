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
import { useMatchMedia } from "../../../hooks/use-match-media.jsx";
import AsideMobile from "./AsideMobile.jsx";
import AsideDesktop from "./AsideDesktop.jsx";

export default function Aside() {
  // Media
  const queries = [
    "(max-width: 990px)",
    "(min-width: 991px) and (max-width: 1199px)",
    "(min-width: 1200px)",
  ];
  const { isMobile } = useMatchMedia(queries);

  // Class

  const mobileClass =
    "h-auto bg-lg-main min-w-screen w-screen flex z-10 left-0 bottom-0 fixed";
  const desktopClass =
    "tablet:pt-[120px] tablet:relative tablet:min-w-[200px] tablet:w-auto tablet:flex-col tablet:z-20";

  // ====

  return (
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
  );
}
