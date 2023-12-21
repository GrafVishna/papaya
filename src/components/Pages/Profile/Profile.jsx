import { ProfileNav } from "./ProfileNav/ProfileNav.jsx";
import React from "react";
import { useAuth } from "../../../hooks/useAuth.jsx";
import { Avatar } from "../../UserDropdown/Avatar.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ChannelDetails } from "./ChannelDetails.jsx";

export const Profile = () => {
  return (
    <>
      <div className="bg-lg-main">
        <div className="h-[440px] img-ibg rounded-t-3xl overflow-hidden flex flex-col justify-end">
          <img
            className=""
            src="https://papaya-api.artem.monster/img.jpg"
            alt="Image"
          />
          <span className="absolute z-10 bottom-0 left-0 w-full h-1/2 bg-lg-profile-header" />
          <div className="relative z-20 pb-12"></div>
          <div className="relative z-20 px-8 pb-10">
            {/*<Avatar size="90px" font="30px" />*/}
            <ChannelDetails />
          </div>
        </div>
      </div>
      <span></span>

      <ProfileNav />
    </>
  );
};
