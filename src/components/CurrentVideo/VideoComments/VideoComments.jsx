import React from "react";
import { MAIN_URL_API } from "../../../store/GlobalURL.js";

export default function VideoComments({ data }) {
  const avatar = MAIN_URL_API + data.avatar;
  const channel = data.channel;

  return (
    <div className="pt-10 mobile:text-default text-caption">
      <div>
        <div className="text-body-main font-bold mb-2">
          <span>899</span> Comments
        </div>
        <ul>
          <VideoComment avatar={avatar} channel={channel} />
          <VideoComment avatar={avatar} channel={channel} />
          <VideoComment avatar={avatar} channel={channel} />
          <VideoComment avatar={avatar} channel={channel} />
        </ul>
      </div>
    </div>
  );
}

const VideoComment = ({ avatar, channel }) => {
  return (
    <li className="py-4">
      <div className="grid grid-cols-[auto_1fr] gap-4 mobile:mb-1 mb-3 items-center">
        <span className="block w-10 h-10 rounded-full overflow-hidden relative">
          <img
            src={avatar}
            alt="User"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </span>
        <div className="">
          <h5 className="font-headline-text font-bold mb-0.5">{channel}</h5>
          <div className="opacity-60 text-small">12.04.2023</div>
        </div>
      </div>
      <div className="mobile:pl-14 pl-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          consectetur, dolorem et ipsa laboriosam molestias officia quisquam
          recusandae voluptate? Atque deleniti ea fuga magnam nostrum quaerat
          quas repellat, suscipit veniam veritatis. Aperiam laudantium libero
          neque provident velit.
        </p>
      </div>
    </li>
  );
};
