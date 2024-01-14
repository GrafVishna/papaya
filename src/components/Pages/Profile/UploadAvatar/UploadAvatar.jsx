import React, { useRef, useState } from "react";
import { BorderBtn } from "../../../share/buttons/BorderBtn.jsx";
import { useAuth } from "../../../../hooks/useAuth.jsx";
import { imageUploadDB } from "../../../../services/uploadAvatar.service.js";
import { useImageChange } from "../../../../hooks/useImageChange.jsx";
import { CgSoftwareUpload } from "react-icons/cg";
import { DEFAULT_AVATAR } from "../../../../api/GlobalURL.js";
import { editUserDataToFirestore } from "../../../../services/userSettings.service.js";
import { useFileUpload } from "../../../../hooks/useFileUpload.jsx";
import { RoundedLoader } from "../../../share/loaders/RoundedLoader.jsx";
import { ProgressUpload } from "../../../share/loaders/ProgressUpload.jsx";

export const UploadAvatar = ({ currentAvatar, isLoading, refetch }) => {
  const { uid } = useAuth();
  const { fileUpload, setFileUpload, handleFileChange, clearFileUpload } =
    useFileUpload();
  const [isUpload, setIsUpload] = useState(100);
  const hiddenInputFile = useRef();

  const handleImageUploadDB = () => {
    if (fileUpload) {
      imageUploadDB({
        fileUpload,
        uid,
        setIsUpload,
        clearFileUpload,
        refetch,
      });
      setIsUpload(null);
    }
  };

  const removeAvatar = async () => {
    await editUserDataToFirestore(uid, {
      avatar: "",
    }).then(() => {
      refetch();
    });
  };

  const image = useImageChange(fileUpload);
  const avatarVisible = image
    ? image
    : currentAvatar
    ? currentAvatar
    : DEFAULT_AVATAR;

  return (
    <div className="flex flex-col items-center flex-auto justify-center py-6">
      <input
        ref={hiddenInputFile}
        type="file"
        className="file-input file-input-bordered w-full max-w-xs shadow-input hidden"
        onChange={(e) => handleFileChange(e)}
      />
      <button
        onClick={(e) => hiddenInputFile.current.click()}
        className="avatar placeholder mb-10"
      >
        <div
          className={`transition duration-300 bg-neutral text-neutral-content rounded-full w-40 bg-lg-main shadow-bs-aside-m `}
        >
          <img
            className={`${
              isLoading ? "opacity-0" : "opacity-100"
            } absolute top-0 left-0 object-cover rounded-full transition duration-300 delay-300`}
            src={avatarVisible}
            alt="Avatar"
          />
          <CgSoftwareUpload
            size="28"
            className="absolute z-20 bottom-2 right-2 text-white p-1 rounded-full bg-lg-main pointer-events-none "
          />
          <ProgressUpload isUpload={isUpload} />
          <RoundedLoader
            show={isLoading}
            className="w-16 relative !left-0 !top-0"
          />
        </div>
      </button>
      <div className="w-full flex-auto flex flex-col justify-end ">
        <BorderBtn
          handleClick={handleImageUploadDB}
          content="Upload"
          className="!w-full text-body-main"
        />
        <BorderBtn
          handleClick={removeAvatar}
          content="Remove"
          className="!w-full text-body-main"
        />
      </div>
    </div>
  );
};
