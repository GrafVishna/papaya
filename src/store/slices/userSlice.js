import { createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;
const localStorageItem = `firebase:authUser:${API_KEY}:[DEFAULT]`;
const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // ==== //
    setUser(state, action) {
      const storedUser = JSON.parse(sessionStorage.getItem(localStorageItem));
      if (storedUser) {
        return storedUser;
      } else {
        console.error("No user found in sessionStorage");
        return state;
      }
    },
    // ==== //
    removeUser() {
      sessionStorage.removeItem(localStorageItem);
      return {};
    },
    // ==== //
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
