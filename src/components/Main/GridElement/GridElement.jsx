import React from "react";

export default function GridElement({ data }) {
  return (
    <div className="rounded-2xl flex flex-col overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:pointer-events-none before:h-full before:z-10 before:border-b-0 before:rounded-2xl before:border-[1px] before:mix-blend-overlay before:border-white/5">
      <div className="relative">
        <div className="relative pb-video-card ">
          <img
            src={data.poster}
            alt={data.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-4 right-4 bg-black py-1 px-1.5 rounded text-13 leading-normal">
          {data.time}
        </span>
      </div>
      <div className="grid grid-cols-item-info gap-4 px-6 py-4 bg-video-card flex-auto">
        <span className="block w-8 h-8 rounded-full cursor-pointer overflow-hidden mt-0.5">
          <img src={data.avatar} alt="" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-17 font-bold cursor-pointer tracking-minus-03 flex-auto h-full">
            {data.title}
          </h3>
          <div className="opacity-60 tracking-minus-04">
            <span className="uppercase mb-0.5">{data.channel}</span>
            <div className="">
              <span>14k</span> views - <span>1</span> month ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
