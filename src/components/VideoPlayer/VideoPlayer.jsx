import React from "react";
import { LionPlayer } from "lion-player";
import "lion-player/dist/lion-skin.min.css";

export default function VideoPlayer({ src, poster }) {
  const SOURCES = [
    {
      src: src,
      poster: poster,
    },
  ];

  return (
    <>
      <div className="aspect-[16/9] relative z-10">
        {src ? (
          <LionPlayer sources={SOURCES} aspectRatio="16:9" />
        ) : (
          <div className="h-full flex items-center justify-center ">
            Loading video...
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover outline-0"
          src={poster}
          alt=""
        />
      </div>
    </>
  );
}
