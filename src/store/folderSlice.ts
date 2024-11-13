import { createSlice } from "@reduxjs/toolkit";
import { getFolder, setFolder } from "../database/localstorage";

const initialState: Array<Folder> = getFolder();

const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    addFolder: (state, action) => {
      state.push(action.payload);
      setFolder(state);
      return state;
    },
    removeFolder: (state, action) => {
      const filterFolders = state.filter(folder => (folder.name !== action.payload));
      setFolder(filterFolders);
      state = filterFolders;
      return state;
    },
    renameFolder: (state, action) => {
      const folderIndex = state.findIndex(folder => folder.id === action.payload.id);
      state[folderIndex].name = action.payload.name;
      setFolder(state);
      return state;
    }
  }
});

export const { addFolder, removeFolder, renameFolder } = folderSlice.actions;

export default folderSlice.reducer;