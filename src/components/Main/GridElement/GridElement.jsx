import React from "react";
import GridElementTitle from "./GridElementTitle/GridElementTitle.jsx";
import GridElementImage from "./GridElementImage/GridElementImage.jsx";
import Time from "./Time/Time.jsx";
import GridElementInfo from "./GridElementInfo/GridElementInfo.jsx";

export default function GridElement({ data }) {
  return (
    <div className="rounded-2xl flex flex-col overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:pointer-events-none before:h-full before:z-10 before:border-b-0 before:rounded-2xl before:border-[1px] before:mix-blend-overlay before:border-white/5">
      <div className="relative">
        <GridElementImage image={data.poster} alt={data.title} />
        <Time time={data.time} />
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-4 tablet:px-6 px-3 mobile:py-4 py-6 bg-video-card flex-auto">
        <span className="block w-8 h-8 rounded-full cursor-pointer overflow-hidden mt-0.5">
          <img src={data.avatar} alt="" />
        </span>
        <div className="flex flex-col gap-2">
          <GridElementTitle content={data.title} />
          <div className="opacity-60 tracking-minus-04">
            <span className="uppercase mb-0.5">{data.channel}</span>
            <GridElementInfo views="14" date="1" />
          </div>
        </div>
      </div>
    </div>
  );
}
