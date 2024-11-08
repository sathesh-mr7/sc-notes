import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      return !state;
    },
    closeModal: () => {
      return false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
