import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";
import currentUserReducer from "../store/slices/currentUserSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    currentUser: currentUserReducer,
  },
});
