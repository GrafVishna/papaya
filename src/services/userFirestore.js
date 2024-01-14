import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";

export const saveUserDataToFirestore = async (userId, userData) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (!userDoc.exists()) {
      await setDoc(userDocRef, filterUserData);
      console.log("User data saved to Firestore.");
    } else {
      console.log("User data already exists in Firestore. Skipping save.");
    }
  } catch (error) {
    console.error("Error saving user data to Firestore:", error.message);
  }
};
