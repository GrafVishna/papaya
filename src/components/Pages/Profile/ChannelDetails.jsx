import React from "react";
import { Avatar } from "../../share/avatars/Avatar.jsx";

export const ChannelDetails = ({ user, isLoading }) => {
  return (
    <div className="flex-auto">
      <div className="flex gap-4 items-center">
        {isLoading ? (
          <span className=" opacity-40">
            <div className="loading loading-dots loading-lg opacity-40" />
          </span>
        ) : (
          <>
            <Avatar
              size="w-16"
              avatar={user?.avatar}
              providerAvatar={user?.providerAvatar}
            />

            <div className="font-[600] flex-auto flex flex-col gap-2">
              <h5 className="uppercase text-headline-text">{user?.email}</h5>
              <p className="opacity-60">197K subscribers</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
