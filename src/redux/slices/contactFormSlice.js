import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openContactForm: false,
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setOpenContactForm(state, action) {
      state.openContactForm = action.payload;
    },
  },
});

export const { setOpenContactForm } = contactFormSlice.actions;

export const contactForm = (state) => state.contactForm.openContactForm;

export default contactFormSlice.reducer;
