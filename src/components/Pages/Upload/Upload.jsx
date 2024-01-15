import { DarkBtn } from "../../share/buttons/darkBtn.jsx";
import { BorderBtn } from "../../share/buttons/BorderBtn.jsx";
import { useAuth } from "../../../hooks/useAuth.jsx";
import { useRef, useState } from "react";
import { useFileUpload } from "../../../hooks/useFileUpload.jsx";
import { useFileChange } from "../../../hooks/useFileChange.jsx";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase.js";
import uuid from "react-native-uuid";
import {
  createPosterUploadRef,
  createVideoUploadRef,
} from "../../../services/FirebaseRefs.js";
import {
  getDownloadURL,
  getMetadata,
  uploadBytesResumable,
} from "firebase/storage";
import { handleUploadProgress } from "../../../helpers/handleUploadProgress.js";
import { getUploadState } from "./getUploadState.js";
import { POSTER_COLLECTION, VIDEO_COLLECTION } from "../../../api/GlobalURL.js";

export const Upload = () => {
  const { uid } = useAuth();

  const posterInputRef = useRef();
  const videoInputRef = useRef();

  const [uploadProgress, setUploadProgress] = useState();
  const [uploadState, setUploadState] = useState();

  const { fileUpload: videoUpload, handleFileChange: handleVideoChange } =
    useFileUpload();
  const { fileUpload: posterUpload, handleFileChange: handlePosterChange } =
    useFileUpload();

  const image = useFileChange(posterUpload);

  const saveData = async (collectionRef, documentId, data) => {
    await setDoc(doc(db, collectionRef, documentId), data, { merge: true });
  };

  const uploadClick = async () => {
    if (videoUpload && posterUpload) {
      const videoId = uuid.v4();
      let posterDownloadURL;

      const videoFileRef = createVideoUploadRef(uid, videoUpload.name);
      const posterFileRef = createPosterUploadRef(videoId, posterUpload.name);

      // Upload
      const uploadFile = async (fileRef, file, callback) => {
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            handleUploadProgress(snapshot, setUploadProgress);
            getUploadState(snapshot.state, setUploadState);
          },
          (error) => console.error(error),
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            callback(downloadURL, uploadTask.snapshot.ref);
          },
        );
      };

      // Poster
      await uploadFile(posterFileRef, posterUpload, async (downloadURL) => {
        posterDownloadURL = downloadURL;
        const metadata = await getMetadata(posterFileRef);
        const savePosterData = {
          [videoId]: {
            url: downloadURL,
            name: posterUpload.name,
            format: metadata.contentType,
          },
        };
        await saveData(POSTER_COLLECTION, videoId, savePosterData);
      });

      // Video
      await uploadFile(videoFileRef, videoUpload, async (downloadURL) => {
        const metadata = await getMetadata(videoFileRef);

        const saveVideoData = {
          [videoId]: {
            url: downloadURL,
            dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
            name: videoUpload.name,
            size: metadata.size,
            format: metadata.contentType,
            author: uid,
            poster: posterDownloadURL,
          },
        };
        await saveData(VIDEO_COLLECTION, uid, saveVideoData);
      });
    }
  };

  const buttonStyles = "px-10 py-2 bg-lg-main rounded";

  return (
    <div className="">
      <div className="grid grid-cols-[1fr,_0.7fr] gap-10 p-8">
        <div className="flex flex-col gap-10 py-4">
          <div>
            <input
              className="hidden"
              accept="video/mp4, video/avi"
              ref={videoInputRef}
              type="file"
              onChange={(e) => handleVideoChange(e)}
            />
            <input
              className="hidden"
              accept="image/jpeg"
              ref={posterInputRef}
              type="file"
              onChange={(e) => handlePosterChange(e)}
            />

            <div className="grid grid-cols-2 gap-4">
              <DarkBtn
                handleClick={(e) => videoInputRef.current.click()}
                content="Add Video"
              />
              <div className="p-2 border-b-[1px] border-white/10">
                <span className="opacity-80">File:</span>{" "}
                <span>{videoUpload && videoUpload.name}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Video name"
              className="shadow-input input"
            />
            <textarea
              placeholder="Video descryption"
              className="shadow-input input pt-2 resize-none h-[150px] border border-white"
            ></textarea>
          </div>
          <BorderBtn handleClick={uploadClick} content="Upload" />
        </div>
        <div>
          <div>
            <div
              onClick={(e) => posterInputRef.current.click()}
              className="relative pb-[65%] overflow-hidden rounded bg-lg-main cursor-pointer"
            >
              <span className="absolute top-1/2 left-1/2 text-body-intro -translate-y-1/2 -translate-x-1/2">
                Poster
              </span>
              {image && (
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={image}
                  alt="Poster"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
