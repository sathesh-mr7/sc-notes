import { configureStore } from "@reduxjs/toolkit";
import notesReducer, {
  addNote,
  filterNotes,
  removeFolderNotes,
  removeNote,
  resetFilter,
  updateNote,
} from "./notesSlice";

const initialState = [
  {
    id: "1",
    title: "Note 1",
    content: "Content 1",
    folder: "Folder 1",
    tag: { text: "Tag1", color: "red" },
    createdAt: "Mar 12, 2023",
    updatedAt: "Mar 15, 2023",
  },
  {
    id: "2",
    title: "Note 2",
    content: "Content 2",
    folder: "Folder 2",
    tag: { text: "Tag2", color: "blue" },
    createdAt: "May 12, 2023",
    updatedAt: "May 15, 2023",
  },
] as Note[];

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  preloadedState: {
    notes: initialState,
  },
});

describe("notesSlice", () => {
  it("should add a note", () => {
    const newNote = { id: "3", title: "Note 3", content: "Content 3" };
    store.dispatch(addNote(newNote));
    const state = store.getState().notes;
    expect(state).toContainEqual(newNote);
  });

  it("should remove a note", () => {
    store.dispatch(removeNote("1"));
    const state = store.getState().notes;
    expect(state).not.toContainEqual(expect.objectContaining({ id: 1 }));
  });

  it("should remove notes in a folder", () => {
    store.dispatch(removeFolderNotes("Folder 1"));
    const state = store.getState().notes;
    expect(state).not.toContainEqual(
      expect.objectContaining({ folder: "Folder 1" }),
    );
  });

  it("should filter notes by query", () => {
    store.dispatch(filterNotes("Note 2"));
    const state = store.getState().notes;
    expect(state).toEqual([initialState[1]]);
  });

  it("should update a note", () => {
    const updatedNote = {
      id: "2",
      title: "Upted Note 2",
      content: "updated Content 2",
      folder: "Folder 2",
      tag: { text: "Tag2", color: "blue" },
      createdAt: "May 12, 2023",
      updatedAt: "May 16, 2023",
    };
    store.dispatch(updateNote(updatedNote));
    const state = store.getState().notes;
    expect(state).toContainEqual(updatedNote);
  });

  it("should reset filter", () => {
    store.dispatch(resetFilter());
    const state = store.getState().notes;
    expect(state).toEqual(store.getState().notes);
  });
});
