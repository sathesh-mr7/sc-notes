import { createSlice } from "@reduxjs/toolkit";
import { getNotes, setNotes } from "../database/localstorage";

const initialState: Array<Note> = getNotes();

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {

      state.push(action.payload);
      setNotes(state);
    },
    removeNote: (state, action) => {
      const filterNotes = state.filter(note => note.id !== action.payload);
      setNotes(filterNotes);
      return filterNotes;
    },
    updateNote: (state, action) => {
      const { id, ...note } = action.payload;
      const existingNote = state.find(note => note.id === id);
      if (existingNote) {
        Object.assign(existingNote, note);
      }
      setNotes(state);
    }
  }
});

export const { addNote, removeNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
