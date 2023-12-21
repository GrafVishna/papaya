import { IoHomeOutline } from "react-icons/io5";
import { ProfileNavBtn } from "./ProfileNavBtn.jsx";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { PiUserRectangleFill } from "react-icons/pi";
import { PiUserListBold } from "react-icons/pi";
import { useRef } from "react";
import UseScroll from "../../../../hooks/useScroll.jsx";

export const ProfileNav = () => {
  const profileNavRef = useRef();
  UseScroll(profileNavRef);
  return (
    <div ref={profileNavRef}>
      <div
        className="nav-item flex items-center relative px-3 before:absolute before:pointer-events-none before:rotate-180
     before:opacity-40 before:top-0 before:left-0 before:w-full before:h-full
     before:bg-[radial-gradient(50%_108%_at_50%_-56%,_#8015A7_0%,_rgba(97,_54,_144,_0.00)_100%)] pt-2"
      >
        <ProfileNavBtn
          active={true}
          text="Home"
          icon={<IoHomeOutline size={22} />}
        />
        <ProfileNavBtn text="Video" icon={<RiVideoLine size={22} />} />
        <ProfileNavBtn
          text="Shorts"
          icon={<MdOutlineVideoCameraBack size={22} />}
        />
        <ProfileNavBtn text="Live" icon={<MdOutlineVideoLibrary size={22} />} />
        <ProfileNavBtn text="Playlists" icon={<RiPlayList2Fill size={22} />} />
        <ProfileNavBtn text="Community" icon={<FiUsers size={22} />} />
        <ProfileNavBtn
          text="Channels"
          icon={<PiUserRectangleFill size={22} />}
        />
        <ProfileNavBtn text="About" icon={<PiUserListBold size={22} />} />
      </div>
      {/*<span className="absolute top-0 left-0 w-[220px] h-full bg-[radial-gradient(circle,rgba(128,21,167,0.8)0%,rgba(128,21,167,0.6)]"></span>*/}
    </div>
  );
};
