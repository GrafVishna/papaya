import React, { useRef } from "react";
import { useMatchMedia } from "../../hooks/useMatchMedia.jsx";

export default function ContentWrapperVideoPage({ children, ref }) {
  const queries = ["(max-width: 1100px)", "(min-width: 1100px)"];
  const { isMobile, isTablet } = useMatchMedia(queries);

  return (
    <main
      className={`video-body grid ${
        isTablet && " grid-cols-[1fr_0.4fr]"
      }  pt-[77px] tablet-big:pl-4 desktop:pl-8 pl-3 desktop:pr-8 tablet-big:pr-4 h-screen tablet:mb-0 pr-0 overflow-hidden`}
    >
      {children}
    </main>
  );
}
