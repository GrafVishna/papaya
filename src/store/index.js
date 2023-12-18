import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";
import googleSlice from "./slices/googleSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    google: googleSlice,
  },
});
