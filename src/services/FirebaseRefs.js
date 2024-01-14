// firebaseRefs.js

import { ref } from "firebase/storage";
import { db, storage } from "../firebase.js";
import { doc } from "firebase/firestore";
import { useState } from "react";

export const createAvatarRef = (uid, imageName) => {
  return ref(storage, `users/${uid}/images/avatar/${imageName}`);
};

export const createUserRef = (uid) => {
  return doc(db, "users", uid);
};

export const useImageUpload = () => {};
