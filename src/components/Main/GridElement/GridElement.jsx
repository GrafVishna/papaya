import React, { useEffect, useState } from "react";
import GridElementTitle from "./GridElementTitle/GridElementTitle.jsx";
import GridElementImage from "./GridElementImage/GridElementImage.jsx";
import Time from "./Time/Time.jsx";
import GridElementInfo from "./GridElementInfo/GridElementInfo.jsx";
import { NavLink } from "react-router-dom";
// import useTextTruncation from "../../../hooks/useTextTruncation.jsx";
import { getFileUrl } from "../../../store/api/getVideo.js";
import Author from "../../Author/Author.jsx";
import { MAIN_URL } from "../../../store/GlobalURL.js";

export default function GridElement({ videoData }) {
  const videoId = videoData.acf["video_file"];
  const videoTitle = videoData.title.rendered;
  const videoDescryption = videoData.acf["video_descryption"];
  const videoPoster =
    videoData["_embedded"]["wp:featuredmedia"][0]["media_details"].sizes.medium
      .source_url;

  const [video, setVideo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFileUrl(videoId);
        setVideo(data);
      } catch (error) {
        console.error("Error setting posts:", error);
      }
    };

    fetchData();
  }, [videoId]);

  if (!video) {
    return null;
  }

  const videoTime = video["media_details"]["length_formatted"];
  const videoUrl = MAIN_URL + "video/" + videoData.id;

  return (
    <div className="rounded-2xl flex flex-col overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:pointer-events-none before:h-full before:z-10 before:border-b-0 before:rounded-2xl before:border-[1px] before:mix-blend-overlay before:border-white/5">
      <NavLink to={videoUrl} className="relative">
        <GridElementImage image={videoPoster} alt={videoTitle} />
        <Time time={videoTime} />
      </NavLink>
      <div className="grid grid-cols-[auto_1fr] gap-4 tablet:px-6 px-3 mobile:py-6 py-4 bg-video-card flex-auto">
        <Author type="avatar" authorId={videoData.author} />
        <div className="flex flex-col gap-2">
          <GridElementTitle link={videoUrl} content={videoTitle} />
          <div className="opacity-60 tracking-minus-04">
            <Author type="name" authorId={videoData.author} />
            <GridElementInfo views="14" date="1" />
          </div>
        </div>
      </div>
    </div>
  );
}
