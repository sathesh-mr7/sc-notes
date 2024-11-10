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
    deleteFromTrash: (state, action) => {
      const index = state.findIndex((note) => note.id === action.payload.id);
      state.splice(index, 1);
      addNotesToTrash(state);
    },
    clearTrash: () => {
      addNotesToTrash(initialState);
      return initialState;
    },
  },
});

export const { addToTrash, deleteFromTrash, clearTrash } = trashNotesSlice.actions;

export default trashNotesSlice.reducer;
