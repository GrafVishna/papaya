import { useAuth } from "../../hooks/useAuth.jsx";
import { HiOutlineUser } from "react-icons/hi2";

export const Avatar = ({ size = "50", font, fontMobile }) => {
  const { photoURL, providerData, displayName } = useAuth();
  console.log(photoURL);
  return (
    <span
      className={`block rounded-full overflow-hidden relative bg-lg-avatar`}
      style={{ width: `${size}`, height: `${size}` }}
    >
      {providerData.providerPhotoUrl ? (
        <AvatarImage src={providerData.providerPhotoUrl} alt={displayName} />
      ) : photoURL ? (
        <AvatarImage src={photoURL} alt={displayName} />
      ) : (
        <span
          className={` text-white text-xl font-medium rounded-full flex items-center justify-center outline-0`}
          style={{ width: `${size}`, height: `${size}` }}
        >
          <HiOutlineUser style={{ fontSize: `${font}` }} />
        </span>
      )}
      <span className="w-20 h-20 hidden absolute"></span>
    </span>
  );
};

const AvatarImage = ({ src, alt }) => {
  return (
    <img
      className="absolute top-0 left-0 w-fill h-full object-cover"
      src={src}
      alt={alt ? alt : "Avatar"}
    />
  );
};
