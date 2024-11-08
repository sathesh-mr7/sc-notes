import React from 'react';
import styles from './DeleteNote.module.scss';
import { useDispatch } from 'react-redux';
import { showModal } from '../../store/modalSlice';
interface DeleteNoteProps {
  note: Note;
  children: React.ReactNode;
  onDelete: (note: Note) => void;
}
const DeleteNote: React.FC<DeleteNoteProps> = ({ note, children, onDelete }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container} onClick={(event) => {
      event.stopPropagation();
      onDelete(note);
      dispatch(showModal());
    }}>
      {children}
    </div>
  );
};

export default DeleteNote;