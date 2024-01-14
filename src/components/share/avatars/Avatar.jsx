import { DEFAULT_AVATAR } from "../../../api/GlobalURL.js";

export const Avatar = ({ size, avatar, name, id }) => {
  return (
    <div className="inline-flex flex-col items-center text-center gap-4 ">
      <div className="avatar">
        <div className={`${size ? size : "w-24"} rounded-full overflow-hidden`}>
          {avatar ? (
            <img src={avatar} alt="User" className="rounded-full" />
          ) : (
            <img src={DEFAULT_AVATAR} alt="User" className="rounded-full" />
          )}
        </div>
      </div>
      {name && (
        <span className="opacity-60 font-bold text-caption">{name}</span>
      )}
    </div>
  );
};
