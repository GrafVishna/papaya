import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    removeUser: (state) => {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});

export const getUserDataParse = (userData) => {
  return {
    email: userData.user.email,
    uid: userData.user.uid,
    timeStamp: new Date().toISOString(),
  };
};

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
