// redux/slices/profileMethodSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openProfileMethod: false,
};

const profileMethodSlice = createSlice({
  name: "profileMethod",
  initialState,
  reducers: {
    setOpenProfileMethod(state, action) {
      console.log("ProfileMethod открывается:", action.payload);
      state.openProfileMethod = action.payload;
    },
  },
});

export const { setOpenProfileMethod } = profileMethodSlice.actions;

export const profileMethod = (state) => state.profileMethod.openProfileMethod;

export default profileMethodSlice.reducer;
