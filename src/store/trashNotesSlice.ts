import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<Note> = [];

const trashNotesSlice = createSlice({
  name: 'trashNotes',
  initialState,
  reducers: {
    addToTrash: (state, action) => {
      state.push(action.payload);
    },
    clearTrash: () => {
      return initialState;
    }
  }
});

export const { addToTrash, clearTrash } = trashNotesSlice.actions;

export default trashNotesSlice.reducer;
