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
      return state;
    },
    deleteFromTrash: (state, action) => {
      state = state.filter((note) => note.id !== action.payload);
      addNotesToTrash(state);
      return state;
    },
    clearTrash: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addToTrash, deleteFromTrash, clearTrash } = trashNotesSlice.actions;

export default trashNotesSlice.reducer;
