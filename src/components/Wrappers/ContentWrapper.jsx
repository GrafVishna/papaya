import React, { useRef } from "react";
import UseScroll from "../../hooks/UseScroll.jsx";

export default function ContentWrapper({ children }) {
  const bodyRef = useRef();
  UseScroll(bodyRef);

  return (
    <main
      ref={bodyRef}
      className="body tablet:ml-[200px] tablet-big:ml-[240px] tablet:mt-[122px] mt-[117px] py-8 tablet:h-header h-header-mobile  tablet:mb-0 mb-[56px]"
    >
      <div className="px-4 mobile:px-8 desktop:px-14">{children}</div>
    </main>
  );
}
