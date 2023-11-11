import SearchInput from "./Search/SearchInput.jsx";
import UserActions from "./UserActions/UserActions.jsx";
import { Logo } from "../Icons.jsx";
import { useMatchMedia } from "../../hooks/use-match-media.jsx";
import React from "react";
import Filters from "./Filters/Filters.jsx";

function Header() {
  const queries = [
    "(max-width: 990px)",
    "(min-width: 991px) and (max-width: 1199px)",
    "(min-width: 1200px)",
  ];
  const { isMobile, isTablet } = useMatchMedia(queries);

  return (
    <header className="flex flex-col fixed top-0 w-screen tablet:w-auto tablet:left-[200px] tablet-big:left-[240px] right-0 z-30">
      <div className="flex items-center justify-between mobile:pr-hd pr-4 py-3 mobile-s:gap-5 gap-3">
        {isMobile ? (
          <div className="py-3.5 pl-4 ">
            <Logo className="w-16" />
          </div>
        ) : (
          <span className="w-0"></span>
        )}
        <SearchInput />
        <UserActions />
      </div>
      <Filters />
    </header>
  );
}

export default Header;
