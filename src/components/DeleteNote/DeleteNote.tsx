import React from 'react';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import styles from './DeleteNote.module.scss';

const DeleteNote: React.FC<{ id: string }> = ({ id }) => {
  const handleDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    console.log(`Deleting note with id: ${id}`);
  };
  return (
    <div className={styles.container} onClick={handleDelete}>
      <TrashIcon className={styles.deleteIcon} />
    </div>
  );
};

export default DeleteNote;