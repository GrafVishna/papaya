import SearchInput from "./Search/SearchInput.jsx";
import UserActions from "./UserActions/UserActions.jsx";
import { Logo } from "../Icons.jsx";
import { useMatchMedia } from "../../hooks/useMatchMedia.jsx";
import React from "react";
import Filters from "./Filters/Filters.jsx";
import { NavLink } from "react-router-dom";

function Header({ page }) {
  const queries = [
    "(max-width: 990px)",
    "(min-width: 991px) and (max-width: 1199px)",
    "(min-width: 1200px)",
  ];
  const { isMobile, isTablet } = useMatchMedia(queries);

  const isVideoPage = page === "video";
  const pageClassHeader = `${
    isVideoPage ? "left-0" : "tablet:left-[200px] tablet-big:left-[240px]"
  }`;
  return (
    <header
      className={`flex flex-col fixed top-0 w-screen tablet:w-auto right-0 tablet:z-30 z-[50] ${pageClassHeader}`}
    >
      <div
        className={`flex items-center justify-between desktop:px-8 tablet-big:px-4 px-3 py-3 mobile-s:gap-5 gap-3`}
      >
        {isMobile || isVideoPage ? (
          <NavLink className="py-3.5" to={"/"}>
            <Logo className={`${isMobile ? "w-16" : "w-24"}`} />
          </NavLink>
        ) : (
          <span className="w-0"></span>
        )}
        <SearchInput />
        <UserActions />
      </div>
    </header>
  );
}

export default Header;
