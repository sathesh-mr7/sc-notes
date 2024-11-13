import { configureStore } from "@reduxjs/toolkit";
import folderReducer, { addFolder, removeFolder, renameFolder } from "./folderSlice";

describe('folderSlice', () => {
  const store = configureStore({ reducer: { folders: folderReducer } });

  it('should add a folder', () => {
    const folder = { id: 1, name: 'New Folder' };
    store.dispatch(addFolder(folder));
    const state = store.getState().folders;
    expect(state).toContainEqual(folder);
  });

  it('should remove a folder', () => {
    const folder1 = { id: 1, name: 'Folder 1' };
    const folder2 = { id: 2, name: 'Folder 2' };
    store.dispatch(addFolder(folder1));
    store.dispatch(addFolder(folder2));
    store.dispatch(removeFolder(folder1.name));
    const state = store.getState().folders;
    expect(state).not.toContainEqual(folder1);
    expect(state).toContainEqual(folder2);
  });

  it('should rename a folder', () => {
    const folder = { id: '1', name: 'Old Name' };
    store.dispatch(addFolder(folder));
    store.dispatch(renameFolder({ id: '1', name: 'New Name' }));
    const state = store.getState().folders;
    const renamedFolder = state.find(f => f?.id === '1');
    expect(renamedFolder?.name).toBe('New Name');
  });
});