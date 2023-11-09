import React from "react";
import Aside from "./Aside/Aside.jsx";
import Filters from "./Filters/Filters.jsx";
import Body from "./Body/Body.jsx";

export default function Main() {
  return (
    <main className="tablet:grid tablet-big:grid-cols-main-d tablet:grid-cols-main-t grid-cols-1 grid-rows-1 filters flex-auto h-screen">
      <Aside />
      <div className="grid grid-cols-1 grid-rows-main-d bg-lg-body body pt-[60px] tablet:pt-[66px] h-screen">
        <Filters />
        <Body />
      </div>
    </main>
  );
}
