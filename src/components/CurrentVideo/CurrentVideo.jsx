import React, { useEffect, useState } from "react";
import SubscriptionsButtons from "./SubscriptionsButtons/SubscriptionsButtons.jsx";
import InfoChannel from "./InfoChannel/InfoChannel.jsx";
import VideoActions from "./VideoActions/VideoActions.jsx";
import VideoTitle from "./VideoTitle/VideoTitle.jsx";
import VideoDescription from "./VideoDescription/VideoDescription.jsx";
import VideoComments from "./VideoComments/VideoComments.jsx";

import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";
import { getFileUrl } from "../../store/api/getVideo.js";
import { getCurrentPost } from "../../store/api/getCurrentPost.js";
import { getPoster } from "../../store/api/getPoster.js";
import { getAllPostData } from "../../store/api/getAllPostData.js";

export default function CurrentVideo({ videoId }) {
  const [videoPost, setVideoPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPostData(videoId);
        if (data) {
          setVideoPost(data);
        }
      } catch (error) {
        console.error("Error setting posts:", error);
      }
    };

    fetchData();
  }, [videoId]);

  if (!videoPost) {
    return null;
  }

  const videoLink = videoPost?.videoData?.guid?.rendered;
  const videoTitle = videoPost?.postData?.title.rendered;
  const videoDescription = videoPost?.postData?.acf?.video_descryption;
  const posterImage =
    videoPost?.posterData?.media_details?.sizes?.large?.source_url;

  const dataChannel = videoPost?.authorData;
  console.log(videoPost.videoData);
  return (
    <div>
      <div className="relative">
        <VideoPlayer src={videoLink} poster={posterImage} />
      </div>

      <div>
        <div className="mobile:pt-8 pt-4 tablet-big:pb-12 pb-20">
          <VideoTitle content={videoTitle} />
          <div className="py-4 flex desktop-big:flex-nowrap mobile:flex-row flex-col flex-wrap gap-6 justify-between mobile:items-center">
            <InfoChannel data={dataChannel} />
            <div className="flex gap-6 desktop-big:justify-end mobile:flex-nowrap mobile:flex-row flex-col-reverse  justify-between flex-auto">
              <SubscriptionsButtons />
              <VideoActions likes="899998" />
            </div>
          </div>
          <VideoDescription description={videoDescription} />
          {/*<VideoComments data={video} />*/}
        </div>
      </div>
    </div>
  );
}
