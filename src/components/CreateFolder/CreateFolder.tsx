import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reduxStore";
import { addFolder } from "../../store/folderSlice";

import { formatDate } from "../../utils/helper";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

import styles from './CreateFolder.module.scss';
interface CreateFolderProps {
  className?: string;
  onClose: () => void;
}

const CreateFolder: React.FC<CreateFolderProps> = ({
  className,
  onClose,
}) => {
  const [folderName, setLabelName] = useState('New Folder');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const allFolders = useSelector((state: RootState) => state.folders);
  const dispatch = useDispatch();

  const handleOnFolderCreate = () => {
    const isFolderNameExist = allFolders.find(folder => folder.name === folderName);
    if (isFolderNameExist || !folderName) {
      setHasError(true);
      setErrorMessage(isFolderNameExist ? 'Folder Name already exists' : 'Folder Name is required');
      return;
    }
    const folder: Folder = {
      id: crypto.randomUUID(),
      name: folderName,
      noteIds: [],
      createdAt: formatDate(new Date()),
      color: '',
    };
    dispatch(addFolder(folder));
    onClose();
  }
  
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      <div className={styles.title}>
        <span>Add Folder</span>
        <i className={styles.closeButton} data-testid="close-button" onClick={onClose}><CloseIcon className={styles.icon} /></i>
      </div>
      <div className={styles.field}>
        <label htmlFor="label" className={styles.label}>Folder Name</label>
        <Input className={`${styles.input} ${hasError ? styles.inputError : ''}`} type="text" id="label" value={folderName} placeholder="Enter Label Name" onChange={(event) => setLabelName(event.target.value)} />
        {hasError && <div className={styles.error}>{errorMessage}</div>}
      </div>
      <footer className={styles.footer}>
        <Button data-testid="create-folder-button" size="xs" variant="tertiary" className={styles.button} onClick={handleOnFolderCreate}>Create Folder</Button>
      </footer>
    </div>
  );
}

export default CreateFolder;