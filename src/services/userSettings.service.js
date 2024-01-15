import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";

export const editUserDataToFirestore = async (userId, userData) => {
  try {
    if (!userData) {
      console.error("User data is undefined or null.");
      return;
    }

    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      await setDoc(userDocRef, { ...userData }, { merge: true });
      console.log("User data saved to Firestore.");
    } else {
      await setDoc(userDocRef, { ...userData });
      console.log("User data already exists in Firestore. Skipping save.");
    }
  } catch (error) {
    console.error("Error saving user data to Firestore:", error.message);
  }
};
