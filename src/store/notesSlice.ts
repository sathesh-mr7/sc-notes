import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<Note> = [
  {
    id: '1',
    title: "First note",
    content: "This is the first note",
    createdAt: 'Mar 1, 2024',
    updatedAt: 'Mar 1, 2024',
  },
  {
    id: '2',
    title: "Second note",
    content: "This is the second note",
    createdAt: 'Mar 2, 2024',
    updatedAt: 'Mar 2, 2024',
    parent: 'P1',
  },
  {
    id: '3',
    title: "Third note",
    content: "This is the third note",
    createdAt: 'Mar 3, 2024',
    updatedAt: 'Mar 3, 2024',
    tag: {
      text: 'Personal',
      color: 'blue'
    }
  },
  {
    id: '4',
    title: "Fourth note",
    content: "This is the fourth note",
    createdAt: 'Mar 4, 2024',
    updatedAt: 'Mar 4, 2024',
    tag: {
      text: 'Personal',
      color: 'blue'
    },
    parent: 'P1'
  },
  {
    id: '5',
    title: "Fifth note",
    content: "This is the fifth note",
    createdAt: 'Mar 5, 2024',
    updatedAt: 'Mar 5, 2024',
    tag: {
      text: 'Work',
      color: 'green'
    }
  },
  {
    title: "First Note",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tag: {
      text: "work",
      color: "blue",
    },
    id: "11",
    parent: null,
    createdAt: 'Mar 12, 2024',
    updatedAt: 'Mar 12, 2024',
  },
  {
    title: "Second Note",
    content: "This is the content of the second note.",
    tag: {
      text: "personal",
      color: "green",
    },
    id: "12",
    parent: "P3",
    createdAt: 'Mar 12, 2024',
    updatedAt: 'Mar 12, 2024',
  },
  {
    id: "13",
    title: "Third Note",
    content: "This is the content of the third note.",
    createdAt: 'Mar 12, 2024',
    updatedAt: 'Mar 12, 2024',
  },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    removeNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const { id, ...note } = action.payload;
      const existingNote = state.find(note => note.id === id);
      if (existingNote) {
        Object.assign(existingNote, note);
      }
    }
  }
});

export const { addNote, removeNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
