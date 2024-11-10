import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import trashNotesReducer from "./trashNotesSlice";
import modalReducer from "./modalSlice";
import foldersReducer from "./folderSlice";

export const store = configureStore({
  reducer: {
    folders: foldersReducer,
    notes: notesReducer,
    showModal: modalReducer,
    trash: trashNotesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
