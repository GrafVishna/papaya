import React, { useRef } from "react";
import CurrentVideo from "../../CurrentVideo/CurrentVideo.jsx";
import AsideVideo from "../../AsideVideo/AsideVideo.jsx";
import ContentWrapperVideoPage from "../../Wrappers/ContentWrapperVideoPage.jsx";
import UseScroll from "../../../hooks/useScroll.jsx";

import { useParams } from "react-router-dom";
import { useMatchMedia } from "../../../hooks/useMatchMedia.jsx";

export default function Video() {
  const bodyRef = useRef();
  UseScroll(bodyRef);

  const queries = ["(max-width: 1100px)", "(min-width: 1100px)"];
  const { isMobile, isTablet } = useMatchMedia(queries);
  const { videoId } = useParams();

  const currentVideo = videoId - 1;
  return (
    <>
      <ContentWrapperVideoPage>
        <div ref={bodyRef} className="py-1 desktop:pr-8 tablet-big:pr-4 pr-3">
          <CurrentVideo videoId={currentVideo} />
        </div>
        {isTablet && <AsideVideo videoId={currentVideo} />}
      </ContentWrapperVideoPage>
    </>
  );
}