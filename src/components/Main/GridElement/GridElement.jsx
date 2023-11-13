import React, { useState } from "react";
import GridElementTitle from "./GridElementTitle/GridElementTitle.jsx";
import GridElementImage from "./GridElementImage/GridElementImage.jsx";
import Time from "./Time/Time.jsx";
import GridElementInfo from "./GridElementInfo/GridElementInfo.jsx";
import { NavLink } from "react-router-dom";
import { MAIN_URL } from "../../../store/GlobalURL.js";
import useTextTruncation from "../../../hooks/useTextTruncation.jsx";

export default function GridElement({ data }) {
  const videoUrl = MAIN_URL + "video/" + data.id;
  const videoPoster = MAIN_URL + data.poster;
  const channelAvatar = MAIN_URL + data.avatar;
  const channelName = data.channel;
  const videoTitle = data.title;
  const videoTime = data.time;

  const [title, setTitle] = useState(videoTitle);
  const maxLengthTitle = 40;
  const [truncatedTitle] = useTextTruncation(title, maxLengthTitle);
  const [channel, setChannel] = useState(channelName);
  const maxLengthChannel = 30;
  const [truncatedChannel] = useTextTruncation(channel, maxLengthChannel);

  return (
    <div className="rounded-2xl flex flex-col overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:pointer-events-none before:h-full before:z-10 before:border-b-0 before:rounded-2xl before:border-[1px] before:mix-blend-overlay before:border-white/5">
      <NavLink to={videoUrl} className="relative">
        <GridElementImage image={videoPoster} alt={videoTitle} />
        <Time time={videoTime} />
      </NavLink>
      <div className="grid grid-cols-[auto_1fr] gap-4 tablet:px-6 px-3 mobile:py-4 py-6 bg-video-card flex-auto">
        <span className="block w-8 h-8 rounded-full cursor-pointer overflow-hidden mt-0.5">
          <img src={channelAvatar} alt={channelName} />
        </span>
        <div className="flex flex-col gap-2">
          <GridElementTitle link={videoUrl} content={truncatedTitle} />
          <div className="opacity-60 tracking-minus-04">
            <span className="uppercase mb-0.5 text-caption">
              {truncatedChannel}
            </span>
            <GridElementInfo views="14" date="1" />
          </div>
        </div>
      </div>
    </div>
  );
}
