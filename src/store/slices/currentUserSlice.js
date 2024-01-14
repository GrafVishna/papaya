import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return action.payload;
    },
    removeCurrentUser: (state) => {
      return initialState;
    },
  },
});

export const { setCurrentUser, removeCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
