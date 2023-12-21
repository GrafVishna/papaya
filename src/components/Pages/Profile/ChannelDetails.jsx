import React from "react";
import { Avatar } from "../../UserDropdown/Avatar.jsx";

export const ChannelDetails = () => {
  return (
    <div className="flex-auto">
      <div className="flex gap-4 items-center">
        <Avatar size="60px" font="30px" />
        <div className="font-[600] flex-auto">
          <h5 className="uppercase text-body-intro">Lorem</h5>
          <p className="opacity-60">197K subscribers</p>
        </div>
      </div>
    </div>
  );
};
