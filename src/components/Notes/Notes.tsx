import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reduxStore';
import { removeNote } from '../../store/notesSlice';
import { closeModal, showModal } from '../../store/modalSlice';

import EmptyNoteSlot from '../EmptyNoteSlot/EmptyNoteSlot';
import NoteSlot from '../NoteSlot/NoteSlot';
import Portal from '../Portal/Portal';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import AddNote from '../AddNote/AddNote';

import styles from './Notes.module.scss';
import Layover from '../Layover/Layover';
import { CONFIRM_MODAL_ID, NOTE_MODAL_ID } from '../../constants';

interface NotesProps {

}
const Notes: React.FC<NotesProps> = () => {
  const notes = useSelector((state: RootState) => state.notes);
  const modal = useSelector((state: RootState) => state.showModal);
  const dispatch = useDispatch();
  const [selectedNote, setSelectedNote] = useState<Note>();

  const handleOnNoteClick = (note: Note) => {
    setSelectedNote(note);
    dispatch(showModal(NOTE_MODAL_ID));
  }

  const handleOnEmptySlotClick = () => {
    setSelectedNote(undefined);
    dispatch(showModal(NOTE_MODAL_ID));
  }
  return (
    <>
      <div className={styles.container}>
        {notes.map(note => (
          <NoteSlot className={`${styles.note}`} key={note.id} note={note} onNoteClick={handleOnNoteClick} />
        ))}
        <EmptyNoteSlot onClick={handleOnEmptySlotClick} />
      </div>
      {modal.visible ?
        <Portal>
          <Layover onClick={() => { dispatch(closeModal()); setSelectedNote(undefined) }} />
          {modal.modalId === NOTE_MODAL_ID ? <AddNote note={selectedNote} onClose={() => setSelectedNote(undefined)} /> : null}
          {modal.modalId === CONFIRM_MODAL_ID ?
            <ConfirmModal
              isOpen={true}
              onClose={() => { dispatch(closeModal()); setSelectedNote(undefined); }}
              onConfirm={() => { dispatch(removeNote(selectedNote?.id)); dispatch(closeModal()); }}
              title="Delete Note?"
              message="This action cannot be undone. Are you sure you want to delete this note?"
              confirmText="Delete"
            /> : null}
        </Portal>
        : null}
    </>
  );
}

export default Notes;