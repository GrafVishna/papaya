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
  const isPage = page === "video";
  return (
    <header
      className={`flex flex-col fixed top-0 w-screen tablet:w-auto ${
        !isPage ? "tablet:left-[200px] tablet-big:left-[240px]" : "left-0 "
      }  right-0 z-30`}
    >
      <div
        className={`${
          isPage && "desktop:pl-8 tablet-big:pl-4 pl-4"
        } flex items-center justify-between desktop-big:pr-8 tablet-big:pr-6 pr-4 py-3 mobile-s:gap-5 gap-3`}
      >
        {isMobile || isPage ? (
          <NavLink className="py-3.5 pr-4 " to={"/"}>
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
