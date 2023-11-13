import React, { useRef } from "react";
import { useMatchMedia } from "../../hooks/useMatchMedia.jsx";

export default function ContentWrapperVideoPage({ children, ref }) {
  const queries = ["(max-width: 1300px)", "(min-width: 1280px)"];
  const { isMobile, isTablet } = useMatchMedia(queries);

  return (
    <main
      className={`video-body grid ${
        isTablet && "grid-cols-[1fr_0.4fr] "
      }  pt-[77px] pl-4 desktop:px-8 px-3 h-screen tablet:mb-0 pr-0 overflow-hidden`}
    >
      {children}
    </main>
  );
}
