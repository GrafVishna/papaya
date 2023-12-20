import { createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;
const localStorageItem = `firebase:authUser:${API_KEY}:[DEFAULT]`;
const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser() {
      const storedUser = JSON.parse(localStorage.getItem(localStorageItem));
      return storedUser ? storedUser : initialState;
    },
    removeUser() {
      localStorage.removeItem(localStorageItem);
      return initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
