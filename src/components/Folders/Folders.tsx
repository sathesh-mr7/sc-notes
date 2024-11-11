import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reduxStore";
import { closeModal, showModal } from "../../store/modalSlice";
import { removeFolder } from "../../store/folderSlice";

import { CONFIRM_DELETE_FOLDER_MODAL_ID } from "../../constants";

import SubList from "../SubList/SubList";
import Portal from "../Portal/Portal";
import Layover from "../../ui/Layover/Layover";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { removeFolderNotes } from "../../store/notesSlice";

interface FoldersProps { 
  onFolderClick?: () => void;
}
const Folders: React.FC<FoldersProps> = ({
  onFolderClick = () => { },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modal = useSelector((state: RootState) => state.showModal);
  const folders = useSelector((state: RootState) => state.folders);
  const [selectedFolderName, setSelectedFolderName] = useState('');
  const [selectedFolderId, setSelectedFolderId] = useState('');

  const handleRemoveFolder = (folderName: string) => {
    setSelectedFolderName(folderName);
    const folder = folders.find(folder => folder.name === folderName);
    setSelectedFolderId(folder?.id ?? '');
    dispatch(showModal(CONFIRM_DELETE_FOLDER_MODAL_ID));
  }

  const handleOnConfirmRemoveFolder = () => {
    dispatch(removeFolder(selectedFolderName));
    dispatch(removeFolderNotes(selectedFolderId));
    dispatch(closeModal());
    setSelectedFolderName('');
    navigate('/');
  }

  const handleOnClose = () => {
    setSelectedFolderName('');
    dispatch(closeModal());
  }

  return (
    <>
      <SubList onListItemClick={onFolderClick} basePath="/folders" onRemoveItem={handleRemoveFolder} listItems={folders.map(folder => ({ id: folder.id, text: folder.name }))} emptyListMessage='No folders found' />
      {modal.visible ?
        <Portal>
          <Layover onClick={handleOnClose} />
          {modal.modalId === CONFIRM_DELETE_FOLDER_MODAL_ID ?
            <ConfirmModal
              isOpen={true}
              onClose={handleOnClose}
              onConfirm={handleOnConfirmRemoveFolder}
              title="Delete Folder?"
              message="This action cannot be undone. Are you sure you want to delete this folder?"
              confirmText="Delete"
            /> : null}
        </Portal>
        : null}
    </>
  );
}

export default Folders;