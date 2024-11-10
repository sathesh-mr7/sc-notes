import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { formatDate, getTextFormatOptionFormHtml, removeHtmlTags } from '../../utils/helper';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

import Button from '../Button/Button';
import styles from './AddNote.module.scss';
import PreviewNote from '../PreviewNote/PreviewNote';
import { addNote, updateNote } from '../../store/notesSlice';
import { closeModal } from '../../store/modalSlice';
import Toolbar from '../Toolbar/Toolbar';
import useTextFormatter from '../../hooks/useTextFormatter';
import LabelColorPicker from '../LabelColorPicker/LabelColorPicker';
import { useLocation, useParams } from 'react-router-dom';
import Input from '../Input/Input';
import { deleteFromTrash } from '../../store/trashNotesSlice';

interface AddNoteProps {
  note?: Note;
  onClose: () => void;
}

const AddNote: React.FC<AddNoteProps> = ({
  note,
  onClose,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const params = useParams<{ folderId: string }>();
  const folderId = note?.folder ?? params.folderId;
  const { formattedText, formatText } = useTextFormatter(!!note);
  const isViewFromTrash = location.pathname.includes('trash');
  const noteId = note?.id ?? crypto.randomUUID();

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [labelName, setLabelName] = useState(note?.tag?.text || '');
  const [labelColor, setLabelColor] = useState<TagColor | undefined>(note?.tag?.color);
  const [textFormatOption, setTextFormatOption] = useState<TextFormatOption>(() => getTextFormatOptionFormHtml(content));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (content && !!textFormatOption) {
      formatText(content, textFormatOption);
    }
  }, [content, JSON.stringify(textFormatOption)]);


  const handleOnSave = (isUpdateNote: boolean) => {
    if (isUpdateNote) {
      dispatch(updateNote({
        id: note?.id,
        title,
        content: formattedText,
        createdAt: note?.createdAt,
        updatedAt: formatDate(new Date()),
        ...(labelName && labelColor ? { tag: { text: labelName, color: labelColor } } : {}),
      }));
    } else {
      if (formattedText) {
        dispatch(addNote({
          id: crypto.randomUUID(),
          title,
          content: formattedText,
          createdAt: formatDate(new Date()),
          updatedAt: formatDate(new Date()),
          ...(folderId ? { folder: folderId } : {}),
          ...(labelName && labelColor ? { tag: { text: labelName, color: labelColor } } : {}),
        }));
      } else {
        textAreaRef.current?.focus();
        setHasError(true);
        return;
      }
    }
    handleOnClose();
  };

  const handleOnClose = () => {
    onClose();
    dispatch(closeModal())
  }

  const handleOnRestore = () => {
    dispatch(addNote({
      id: crypto.randomUUID(),
      title,
      content: formattedText,
      createdAt: formatDate(new Date()),
      updatedAt: formatDate(new Date()),
      ...(folderId ? { folder: folderId } : {}),
      ...(labelName && labelColor ? { tag: { text: labelName, color: labelColor } } : {}),
    }));
    handleOnRemoveFromTrash();
    handleOnClose();
  };

  const handleOnRemoveFromTrash = () => {
    dispatch(deleteFromTrash(noteId));
    handleOnClose();
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h3 className={styles.headerTitle}>{!!note ? 'Edit This Note' : 'Add New Note'}</h3>
          <span className={styles.closeButton} onClick={handleOnClose}>
            <CloseIcon className={styles.closeIcon} />
          </span>
        </header>
        <section className={styles.section}>
          <div className={styles.sectionLeft}>
            <div className={styles.content}>
              <div className={styles.field}>
                <label htmlFor="title" className={styles.label}>Note Title</label>
                <Input className={styles.input} id="title" type='text' value={title} placeholder="Enter title" onChange={(event) => setTitle(event.target.value)} />
              </div>
              <div className={styles.field}>
                <label htmlFor="content" className={styles.label}>Note</label>
                <textarea
                  ref={textAreaRef}
                  className={`${styles.textarea} ${hasError ? styles.error : ''}`} id="content" value={removeHtmlTags(content)}
                  placeholder="Enter Note"
                  onChange={handleTextAreaChange}
                />
                <Toolbar defaultOption={textFormatOption} onOptionsChange={setTextFormatOption} />
              </div>
              <div className={styles.field}>
                <label htmlFor="label" className={styles.label}>Label <small>(Optional)</small></label>
                <Input className={styles.input} id="label" type='text' value={labelName} placeholder="Enter Label Name" onChange={(event) => setLabelName(event.target.value)} />
                <LabelColorPicker onColorPick={setLabelColor} selectedColor={labelColor} />
              </div>
            </div>
          </div>
          <div className={styles.sectionRight}>
            <PreviewNote note={{
              id: noteId,
              title,
              content: formattedText,
              createdAt: note?.createdAt ?? formatDate(new Date()),
              updatedAt: note?.createdAt ?? formatDate(new Date()),
              ...(labelName && labelColor ? { tag: { text: labelName, color: labelColor } } : {}),
            }} />
          </div>
        </section>
        <footer className={styles.footer}>
          {!isViewFromTrash ?
            (
              <>
                <Button size='sm' type='reset' variant='secondary' className={styles.button} onClick={handleOnClose}>Cancel</Button>
                <Button size='sm' type='submit' variant='primary' className={styles.button} onClick={() => handleOnSave(!!note)}>Save</Button>
              </>
            ) : (
              <>
                <Button size='sm' type='reset' variant='tertiary' className={styles.button} onClick={handleOnRestore}>Restore</Button>
                <Button size='sm' type='reset' variant='secondary' className={styles.button} onClick={handleOnRemoveFromTrash}>Delete Forever</Button>
              </>
            )}
        </footer>
      </div>
    </div>
  );
};

export default AddNote;