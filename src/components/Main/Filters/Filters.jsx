import React from "react";
import { NavLine, NavLineFull } from "../../Icons.jsx";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function Filters() {
  const filterLink =
    "whitespace-nowrap  filter h-10 flex items-center justify-center px-4 py-1 font-bold opacity-60 hover:opacity-100 transition duration-300";

  const before =
    "before:absolute before:bg-lg-f-line before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-blend-overlay";

  const after =
    "after:absolute after:bg-lg-f-line after:h-10 z-10 after:bottom-0 after:left-10 after:right-10";

  return (
    <SimpleBar className="tablet:py-2 py-1 relative shadow-bs-filter top-filter tablet:z-10 z-30  backdrop-blur">
      <NavLineFull
        className={`${before} absolute blur-xl bottom-0 left-0 w-full pointer-events-none`}
      />
      <span className="absolute -bottom-2.5 bg-pink pointer-events-none opacity-20 w-2/3 left-1/2 -translate-x-1/2 h-5 blur-xl z-10"></span>
      <NavLine className="left-[35%] pointer-events-none" />
      <ul
        className={`relative  flex items-center h-10 desktop:gap-10 tablet:gap-6 mobile:gap-4 tablet:px-4 filter-m-r`}
      >
        <li>
          <button className={`${filterLink}`}>All</button>
        </li>
        <li>
          <button className={filterLink}>Gaming</button>
        </li>
        <li>
          <button className={filterLink}>Thoughts</button>
        </li>
        <li>
          <button className={filterLink}>Music</button>
        </li>
        <li>
          <button className={filterLink}>Thrillers</button>
        </li>
        <li>
          <button className={`${filterLink} opacity-100`}>Mixes</button>
        </li>
        <li>
          <button className={filterLink}>Avatar</button>
        </li>
        <li>
          <button className={filterLink}>Film criticism</button>
        </li>
        <li>
          <button className={filterLink}>Korean dramas</button>
        </li>
        <li>
          <button className={filterLink}>Characters</button>
        </li>
        <li>
          <button className={filterLink}>Eating</button>
        </li>
      </ul>
    </SimpleBar>
  );
}
