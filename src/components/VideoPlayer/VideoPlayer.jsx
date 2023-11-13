import React from "react";
import { LionPlayer } from "lion-player";
import "lion-player/dist/lion-skin.min.css";
import { MAIN_URL } from "../../store/GlobalURL.js";

export default function VideoPlayer({ src, poster }) {
  const SOURCES = [
    {
      src: src,
    },
  ];

  return (
    <>
      <LionPlayer sources={SOURCES} aspectRatio="16:9" />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={MAIN_URL + poster}
          alt=""
        />
      </div>
    </>
  );
}
