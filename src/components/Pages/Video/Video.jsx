import { useRef } from "react";
import CurrentVideo from "../../CurrentVideo/CurrentVideo.jsx";
import AsideVideo from "../../AsideVideo/AsideVideo.jsx";
import ContentWrapperVideoPage from "../../Wrappers/ContentWrapperVideoPage.jsx";
import UseScroll from "../../../hooks/useScroll.jsx";

import { useParams } from "react-router-dom";
import { useMatchMedia } from "../../../hooks/useMatchMedia.jsx";

export default function Video() {
  const queries = ["(max-width: 1100px)", "(min-width: 1100px)"];
  const { isMobile, isTablet } = useMatchMedia(queries);
  const { videoId } = useParams();
  const bodyRef = useRef();
  UseScroll(bodyRef);
  return (
    <>
      <ContentWrapperVideoPage>
        <div ref={bodyRef}>
          <div className="py-1 desktop:pr-8 tablet-big:pr-4 pr-3 overflow-hidden">
            <CurrentVideo videoId={videoId} />
          </div>
        </div>
        {isTablet && <AsideVideo videoId={videoId} />}
      </ContentWrapperVideoPage>
    </>
  );
}
