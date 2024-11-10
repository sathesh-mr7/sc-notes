import { addNotesToTrash, getNotesFromTrash } from "../database/localstorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<Note> = getNotesFromTrash();

const trashNotesSlice = createSlice({
  name: "trashNotes",
  initialState,
  reducers: {
    addToTrash: (state, action) => {
      state.push(action.payload);
      addNotesToTrash(state);
    },
    clearTrash: () => {
      addNotesToTrash(initialState);
      return initialState;
    },
  },
});

export const { addToTrash, clearTrash } = trashNotesSlice.actions;

export default trashNotesSlice.reducer;
