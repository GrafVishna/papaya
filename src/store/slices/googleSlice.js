import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const googleSlice = createSlice({
  name: "google-user",
  initialState,
  reducers: {
    setGoogleUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      localStorage.setItem("google-user", JSON.stringify(state));
    },
    removeGoogleUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      localStorage.removeItem("google-user");
    },
  },
});

export const { setGoogleUser, removeGoogleUser } = googleSlice.actions;
export default googleSlice.reducer;
