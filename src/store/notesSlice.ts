import { createSlice } from "@reduxjs/toolkit";
import { getNotes, setNotes } from "../database/localstorage";

const initialState: Array<Note> = getNotes();

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      console.log('addNote', action.payload);
      state.push(action.payload);
      setNotes(state);
      return state;
    },
    removeNote: (state, action) => {
      console.log('removeNote', action.payload);
      const filterNotes = state.filter((note) => note.id !== action.payload);
      setNotes(filterNotes);
      return filterNotes;
    },
    removeFolderNotes: (state, action) => {
      if (!action.payload) {
        return state;
      }
      state = state.filter((note) => !(note.folder && note.folder === action.payload));
      setNotes(state);
      return state;
    },
    updateNote: (state, action) => {
      const { id, ...note } = action.payload;
      const existingNote = state.find((note) => note.id === id);
      if (existingNote) {
        Object.assign(existingNote, note);
      }
      setNotes(state);
      return state;
    },
    filterNotes: (state, action) => {
      const query = action.payload.toLowerCase();
      const notes = getNotes();
      const filterNotes = notes.filter(
        (note) => (note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query) ||
          note.tag?.text.toLowerCase().includes(query)),
      );
      state = filterNotes;
    },
    resetFilter: () => {
      return getNotes();
    },
  },
});

export const { addNote, removeNote, removeFolderNotes, updateNote, filterNotes, resetFilter } = notesSlice.actions;

export default notesSlice.reducer;
