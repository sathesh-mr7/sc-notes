import {
  LOCAL_STORAGE_FOLDER_KEY,
  LOCAL_STORAGE_NOTES_KEY,
} from "../constants";

function getLocalStorageItem(key: string) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

function setLocalStorageItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getNotes(): Note[] {
  return getLocalStorageItem(LOCAL_STORAGE_NOTES_KEY) ?? [];
}

export function setNotes(notes: Note[]) {
  setLocalStorageItem(LOCAL_STORAGE_NOTES_KEY, notes);
}

export function getFolder(): Folder[] {
  return getLocalStorageItem(LOCAL_STORAGE_FOLDER_KEY) ?? [];
}

export function setFolder(folders: Folder[]) {
  setLocalStorageItem(LOCAL_STORAGE_FOLDER_KEY, folders);
}