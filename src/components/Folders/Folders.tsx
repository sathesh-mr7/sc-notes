import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reduxStore";
import { closeModal, showModal } from "../../store/modalSlice";
import { removeFolder } from "../../store/folderSlice";

import { BASE_SITE_PATH, CONFIRM_DELETE_FOLDER_MODAL_ID } from "../../constants";

import SubList from "../SubList/SubList";
import Portal from "../Portal/Portal";
import Layover from "../Layover/Layover";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const Folders: React.FC = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.showModal);
  const folders = useSelector((state: RootState) => state.folders);
  const [selectedFolderName, setSelectedFolderName] = useState('');

  const handleRemoveFolder = (folderName: string) => {
    setSelectedFolderName(folderName);
    dispatch(showModal(CONFIRM_DELETE_FOLDER_MODAL_ID));
  }

  const handleOnConfirmRemoveFolder = () => {
    dispatch(removeFolder(selectedFolderName));
    dispatch(closeModal());
    setSelectedFolderName('');
  }

  const handleOnClose = () => {
    setSelectedFolderName('');
    dispatch(closeModal());
  }

  return (
    <>
      <SubList basePath={`${BASE_SITE_PATH}/folders`} onRemoveItem={handleRemoveFolder} listItems={folders.map(folder => ({ id: folder.id, text: folder.name }))} emptyListMessage='No folders found' />
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