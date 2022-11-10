import { apiSlice } from "features/api/apiSlice";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  auth: false,
  id: "",
};

export const selectMeResult = apiSlice.endpoints.getMe.select();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin(state, action) {
      state.auth = true;
      state.id = action.payload.userId;
    },
    authLogout(state, action) {
      state.auth = false;
      state.id = "";
    },
    triggerAuth(state, action) {
      state.auth = true;
    }
  },
});

export default authSlice.reducer;

export const {
  authLogin,
  authLogout,
  triggerAuth,
} = authSlice.actions;

export const selectAuth = (state) => state.auth.auth;

export const myId = (state) => state.auth.id;
