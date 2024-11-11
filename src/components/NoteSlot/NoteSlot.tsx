import React from 'react';
import Tag from '../../ui/Tag/Tag';
import DeleteNote from '../DeleteNote/DeleteNote';
import ActionMenu from '../ActionMenu/ActionMenu';

import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as EllipsisIcon } from "../../assets/icons/ellipsis-vertical.svg";

import styles from './NoteSlot.module.scss';

interface NoteSlotProps {
  className?: string;
  note: Note;
  onNoteClick: (note: Note) => void;
  readonly?: boolean;
  actions: Array<string>;
  onActionClick: (note: Note, action: string) => void;
}

const NoteSlot: React.FC<NoteSlotProps> = ({ note, onNoteClick, className, readonly, actions, onActionClick }) => {
  const [showActionMenu, setShowActionMenu] = React.useState(false);
  const handleOnActionMenuClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.stopPropagation();
    setShowActionMenu(!showActionMenu);
  }

  const handleAction = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, action: string) => {
    event.stopPropagation();
    onActionClick(note, action);
  }

  return (
    <div className={`${styles.container} ${className ?? ''}`} onClick={() => onNoteClick(note)}>
      <header className={styles.header}>
        <div className={styles.tags}>
          {note.tag ? <Tag color={note.tag.color} text={note.tag.text} /> : null}
        </div>

        {!readonly ? (
          <div className={styles.actionMenu}>
            <span className={styles.icon} onClick={handleOnActionMenuClick}><EllipsisIcon className={styles.ellipsisIcon} /></span>
            <ActionMenu show={showActionMenu} actions={actions} onClick={handleAction} className={styles.actionMenuList} />
          </div>
        ) : null}

      </header>
      <div className={styles.content}>
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.note} dangerouslySetInnerHTML={{ __html: note.content }} />
      </div>
      <div className='divider' />
      <footer className={styles.footer}>
        <span className={styles.createdDate}>{note.createdAt}</span>
        {!readonly ? (
          <DeleteNote note={note} onDelete={onNoteClick}>
            <TrashIcon className={styles.deleteIcon} />
          </DeleteNote>
        ) : null}
      </footer>
    </div>
  )
};

export default NoteSlot;