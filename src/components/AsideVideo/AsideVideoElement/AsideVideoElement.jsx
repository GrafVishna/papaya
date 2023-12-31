import React, { useState } from "react";
import useTextTruncation from "../../../hooks/useTextTruncation.jsx";
import { NavLink } from "react-router-dom";
import { MAIN_URL, MAIN_URL_API } from "../../../api/GlobalURL.js";
import Author from "../../Author/Author.jsx";

export default function AsideVideoElement({ data }) {
  // const [text, setText] = useState(data.title);
  // const maxLength = 40;
  // const [truncatedText] = useTextTruncation(text, maxLength);

  const videoUrl = MAIN_URL + "video/" + data.id;
  const videoTitle = data.title.rendered;
  const videoPoster =
    data["_embedded"]["wp:featuredmedia"][0]["media_details"].sizes.medium
      .source_url;

  return (
    <li className="aside-video-card rounded-2xl overflow-hidden border-l-[1px] border-white/10 pr-2">
      <div className="grid desktop:grid-cols-[0.8fr_1fr] grid-cols-[0.6fr_1fr]">
        <NavLink to={videoUrl} className="relative overflow-hidden pb-[58%]">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoPoster}
            alt=""
          />
          <span className="absolute z-20 px-1 py-0.5 bg-black bottom-2 right-2 border-0 ">
            {/*{videoTime}*/}
          </span>
        </NavLink>
        <div className="py-2 pl-2 pr-2 bg-lg-aside-card">
          <NavLink
            to={videoUrl}
            className="font-bold desktop:text-default text-small mb-1"
          >
            {videoTitle}
          </NavLink>
          <div className="opacity-60 desktop:text-caption text-small">
            <div>
              <Author type="name" authorId={data.author} />
            </div>
            <span>14</span> views - <span>1</span> month ago
          </div>
        </div>
      </div>
    </li>
  );
}
