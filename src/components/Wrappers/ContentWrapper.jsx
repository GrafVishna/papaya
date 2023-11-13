import React, { useRef } from "react";
import UseScroll from "../../hooks/useScroll.jsx";
import Filters from "../Header/Filters/Filters.jsx";

export default function ContentWrapper({ children }) {
  const bodyRef = useRef();
  UseScroll(bodyRef);

  return (
    <>
      <main className="body tablet:ml-[200px] tablet-big:ml-[240px] tablet:mt-[66px] mt-[69px] tablet:h-header h-header-mobile  tablet:mb-0 mb-[56px]">
        <Filters />
        <div ref={bodyRef} className="h-full py-8">
          <div className="px-4 mobile:px-8 desktop:px-14">{children}</div>
        </div>
      </main>
    </>
  );
}
