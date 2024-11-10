import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reduxStore";
import { clearTrash } from "../../store/trashNotesSlice";
import Notes from "../Notes/Notes";
import Button from "../Button/Button";

import styles from './TrashedNotes.module.scss';

const TrashedNotes = () => {
  const trashNotes = useSelector((state: RootState) => state.trash);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Notes notes={trashNotes} readonly />
      {trashNotes.length > 0 ? (
        <Button variant="secondary" className={styles.button} onClick={() => dispatch(clearTrash())}>
          Empty Trash
        </Button>) : (
        <div className={styles.emptyTrash}>Trash is empty</div>
      )}
    </div>
  );
}

export default TrashedNotes;