import { createSlice } from "@reduxjs/toolkit";
import { getNotes, setNotes } from "../database/localstorage";

const initialState: Array<Note> = getNotes();

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
      setNotes(state);
    },
    removeNote: (state, action) => {
      const filterNotes = state.filter((note) => note.id !== action.payload);
      setNotes(filterNotes);
      return filterNotes;
    },
    updateNote: (state, action) => {
      const { id, ...note } = action.payload;
      const existingNote = state.find((note) => note.id === id);
      if (existingNote) {
        Object.assign(existingNote, note);
      }
      setNotes(state);
    },
    filterNotes: (state, action) => {
      const query = action.payload.toLowerCase();
      const notes = getNotes();
      return notes.filter(
        (note) => (note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query) ||
          note.tag?.text.toLowerCase().includes(query)),
      );
    },
    resetFilter: () => {
      return getNotes();
    },
  },
});

export const { addNote, removeNote, updateNote, filterNotes, resetFilter } = notesSlice.actions;

export default notesSlice.reducer;
