import { useAuth, useCurrentUser } from "../../../hooks/useAuth.jsx";
import { CgSoftwareUpload } from "react-icons/cg";
import { DEFAULT_AVATAR } from "../../../api/GlobalURL.js";
// import useFetchUserData from "../../../services/getOneUser.js";

export const AvatarCurrent = ({ onClick, upload, size = "50px" }) => {
  const { isAuth, uid } = useAuth();
  const { avatar } = useCurrentUser();
  const containerStyle = {
    flex: size ? `0 0 ${size}` : null,
    width: size,
    height: size,
  };

  const avatarStyle = {
    width: size,
    height: size,
  };

  const imageStyle = {
    borderRadius: "50%",
  };

  return (
    <div style={containerStyle} className="avatar">
      {isAuth && (
        <>
          <div
            className={`rounded-full !flex items-center justify-center bg-lg-avatar !overflow-hidden ${
              onClick && "cursor-pointer"
            }`}
            style={avatarStyle}
            onClick={onClick && onClick}
          >
            {avatar ? (
              <img src={avatar} alt="User" style={imageStyle} />
            ) : (
              <img src={DEFAULT_AVATAR} alt="User" style={imageStyle} />
            )}
          </div>
          {upload && (
            <CgSoftwareUpload
              size="28"
              className="absolute z-20 bottom-0 right-0 text-white p-1 rounded-full bg-lg-main pointer-events-none"
            />
          )}
        </>
      )}
    </div>
  );
};
