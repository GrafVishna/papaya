import { signOut } from "firebase/auth";
import { removeUser } from "../store/slices/userSlice.js";
import { auth } from "../firebase.js";

export const logOut = async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(removeUser());
    console.log("User signed out successfully.");
  } catch (error) {
    console.error("Sign out error:", error);
  }
};
