import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  user: "",
  school: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSchool: (state, action) => {
      state.school = action.payload;
    },
  },
});

export const { setEmail, setUser, setSchool } = authSlice.actions;

export const selectEmail = (state) => state.auth.email;
export const selectUser = (state) => state.auth.user;
export const selectSchool = (state) => state.auth.school;

export default authSlice.reducer;
