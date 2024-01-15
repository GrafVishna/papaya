// firebaseRefs.js

import { ref } from "firebase/storage";
import { db, storage } from "../firebase.js";
import { doc } from "firebase/firestore";

export const createAvatarRef = (uid, imageName) => {
  return ref(storage, `users/${uid}/images/avatar/${imageName}`);
};

export const createVideoUploadRef = (uid, fileName) => {
  return ref(storage, `videos/${uid}/${fileName}`);
};

export const createPosterUploadRef = (videoId, fileName) => {
  return ref(storage, `posters/${videoId}/${fileName}`);
};

export const createUserRef = (uid) => {
  return doc(db, "users", uid);
};

export const useImageUpload = () => {};
