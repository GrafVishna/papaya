import React from "react";
import data from "../../testData/testData.json";
import SubscriptionsButtons from "./SubscriptionsButtons/SubscriptionsButtons.jsx";
import InfoChannel from "./InfoChannel/InfoChannel.jsx";
import VideoActions from "./VideoActions/VideoActions.jsx";
import VideoTitle from "./VideoTitle/VideoTitle.jsx";
import VideoDescription from "./VideoDescription/VideoDescription.jsx";
import VideoComments from "./VideoComments/VideoComments.jsx";

import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";
import { MAIN_URL } from "../../store/GlobalURL.js";

export default function CurrentVideo({ videoId }) {
  const video = data[videoId];

  const videoUrl = MAIN_URL + video.video;
  const videoTitle = video.title;
  const videoDecryption = video.decryption;

  const dataChannel = {
    avatar: MAIN_URL + video.avatar,
    alt: video.title,
    channel: video.channel,
  };

  return (
    <div>
      <div className="relative">
        <VideoPlayer src={videoUrl} poster={data[videoId].poster} />
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
          <VideoDescription decryption={videoDecryption} />
          <VideoComments data={video} />
        </div>
      </div>
    </div>
  );
}
