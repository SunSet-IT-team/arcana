import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openBuyForm: false,
};

const buyFormSlice = createSlice({
  name: "buyForm",
  initialState,
  reducers: {
    setOpenBuyForm(state, action) {
      state.openBuyForm = action.payload;
    },
  },
});

export const { setOpenBuyForm } = buyFormSlice.actions;

export const buyForm = (state) => state.buyForm.openBuyForm;

export default buyFormSlice.reducer;
