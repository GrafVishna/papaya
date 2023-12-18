import { createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;
const initialState = {
  email: null,
  token: null,
  id: null,
  avatar: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.avatar = action.payload.avatar;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.avatar = null;
      sessionStorage.removeItem(`firebase:authUser:${API_KEY}:[DEFAULT]`);
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
