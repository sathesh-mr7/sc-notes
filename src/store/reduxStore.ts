import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import trashNotesReducer from "./trashNotesSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    trash: trashNotesReducer,
    showModal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
