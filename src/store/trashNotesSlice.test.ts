import { configureStore } from "@reduxjs/toolkit";
import trashNotesReducer, { addToTrash, deleteFromTrash, clearTrash } from "./trashNotesSlice";

describe("trashNotesSlice", () => {
  let store = configureStore({
    reducer: {
      trashNotes: trashNotesReducer,
    },
  });

  it("should handle initial state", () => {
    expect(store.getState().trashNotes).toEqual([]);
  });

  it("should handle addToTrash", () => {
    const note = { id: 1, content: "Test Note" };
    store.dispatch(addToTrash(note));
    expect(store.getState().trashNotes).toEqual([note]);
  });

  it("should handle deleteFromTrash", () => {
    const note1 = { id: 1, content: "Test Note 1" };
    const note2 = { id: 2, content: "Test Note 2" };
    store.dispatch(addToTrash(note1));
    store.dispatch(addToTrash(note2));
    store.dispatch(deleteFromTrash(note1.id));
    expect(store.getState().trashNotes).toEqual([note2]);
  });

  it("should handle clearTrash", () => {
    const note1 = { id: 1, content: "Test Note 1" };
    const note2 = { id: 2, content: "Test Note 2" };
    store.dispatch(addToTrash(note1));
    store.dispatch(addToTrash(note2));
    store.dispatch(clearTrash());
    expect(store.getState().trashNotes).toEqual([]);
  });
});