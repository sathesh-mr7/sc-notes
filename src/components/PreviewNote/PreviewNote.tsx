import React from 'react';
import sanitizeHtml from 'sanitize-html';
import Tag from '../Tag/Tag';
import styles from './PreviewNote.module.scss';

interface PreviewNoteProps {
  note: Note;
}
const PreviewNote: React.FC<PreviewNoteProps> = ({ note }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.tags}>
          {note.tag ? <Tag color={note.tag.color} text={note.tag.text} /> : null}
        </div>
      </header>
      <div className={styles.content}>
        <h3 className={styles.title}>{note.title}</h3>
        <p data-testid="note-content" className={styles.note} dangerouslySetInnerHTML={{ __html: sanitizeHtml(note.content) }} />
      </div>
      <div className='divider' />
      <footer className={styles.footer}>
        <span className={styles.createdDate}>{note.createdAt}</span>
      </footer>
    </div>
  );
}

export default PreviewNote;