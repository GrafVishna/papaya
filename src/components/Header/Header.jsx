import SearchInput from "./Search/SearchInput.jsx";
import UserActions from "./UserActions/UserActions.jsx";
import { Logo } from "../Icons.jsx";
import { useMatchMedia } from "../../hooks/use-match-media.jsx";
import React from "react";

function Header() {
  const queries = [
    "(max-width: 990px)",
    "(min-width: 991px) and (max-width: 1199px)",
    "(min-width: 1200px)",
  ];
  const { isMobile, isTablet } = useMatchMedia(queries);

  return (
    <header className="z-30">
      <div className="flex fixed top-0 left-0 w-full items-center justify-between tablet:pl-[225px] mobile:pr-hd pr-4 py-3 mobile-s:gap-5 gap-3">
        {isMobile ? (
          <div className="py-3.5 pl-4 ">
            <Logo className="w-16" />
          </div>
        ) : (
          <span className="w-[140px]"></span>
        )}
        <SearchInput />
        <UserActions />
      </div>
    </header>
  );
}

export default Header;
