import React from 'react';
import Tag from '../Tag/Tag';
import styles from './PreviewNote.module.scss';

interface PreviewNoteProps {
  note: Note;
}
const PreviewNote: React.FC<PreviewNoteProps> = ({ note }) => {
  return (
    <div className={styles.container}>
      <div className={styles.previewTitle}>Preview</div>
      <div className={styles.previewContent}>
        {note.tag ? <header className={styles.header}>
          <div className={styles.tags}>
            <Tag color={note.tag.color} text={note.tag.text} />
          </div>
        </header>
          : null}
        <div className={styles.content}>
          <h3 className={styles.title}>{note.title}</h3>
          <p data-testid="note-content" className={styles.note} dangerouslySetInnerHTML={{ __html: note.content }} />
        </div>
        <div className='divider' />
        <footer className={styles.footer}>
          <span className={styles.createdDate}>{note.createdAt}</span>
        </footer>
      </div>
    </div>

  );
}

export default PreviewNote;