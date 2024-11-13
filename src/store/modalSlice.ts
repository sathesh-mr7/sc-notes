import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  modalId: string;
  visible: boolean;
}
const initialState: ModalState = {
  modalId: "",
  visible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      return {
        modalId: action.payload,
        visible: true,
      };
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
