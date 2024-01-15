import {
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { setDoc } from "firebase/firestore";
import { createAvatarRef, createUserRef } from "./FirebaseRefs.js";
import { handleUploadProgress } from "../helpers/handleUploadProgress.js";

export const imageUploadDB = ({
  fileUpload,
  uid,
  setIsUpload,
  clearFileUpload,
  refetch,
}) => {
  if (fileUpload) {
    const fileRef = createAvatarRef(uid, fileUpload.name);
    const userRef = createUserRef(uid);

    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setDoc(userRef, { avatar: url }, { merge: true })
          .then(() => {
            const uploadTask = uploadBytesResumable(fileRef, fileUpload);

            uploadTask.on(
              "state_changed",
              (snapshot) => handleUploadProgress(snapshot, setIsUpload),
              (error) => console.error(error),
              () => successUploadFile({ clearFileUpload }),
            );
          })
          .then(() => {
            refetch();
          });
      });
    });
  }
};

const successUploadFile = ({ clearFileUpload }) => {
  clearFileUpload();
  console.log("Success upload avatar");
};
