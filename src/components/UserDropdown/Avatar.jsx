import { useAuth } from "../../hooks/useAuth.jsx";
import { HiOutlineUser } from "react-icons/hi2";

export const Avatar = ({ size = "50px", font }) => {
  const { isAuth, photoURL, providerData } = useAuth();
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
        <div
          className="rounded-full !flex items-center justify-center bg-lg-avatar !overflow-hidden"
          style={avatarStyle}
        >
          {providerData.providerPhotoUrl ? (
            <img
              src={providerData.providerPhotoUrl}
              alt="User"
              style={imageStyle}
            />
          ) : photoURL ? (
            <img src={photoURL} alt="User" style={imageStyle} />
          ) : (
            <HiOutlineUser style={{ fontSize: font || "inherit" }} />
          )}
        </div>
      )}
    </div>
  );
};
