import React, { useRef } from "react";
import UseScroll from "../../hooks/useScroll.jsx";

export const ProfileWrapper = ({ children }) => {
  const profileRef = useRef();
  UseScroll(profileRef);
  return (
    // px-4 mobile:px-8 desktop:px-14
    <main className="body tablet:pl-[200px] tablet-big:pl-[240px] tablet:pt-[66px] tablet:pb-0 pb-[56px] pt-[69px]  h-screen tablet:mb-0">
      <div ref={profileRef} className="h-full pb-8 bg-dark-purple ">
        <div className="p-0">{children}</div>
      </div>
    </main>
  );
};
