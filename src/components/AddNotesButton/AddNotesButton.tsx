import Button from "../../ui/Button/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-sign.svg";
import styles from "./AddNotesButton.module.scss";
import React from "react";

interface AddNotesButtonProps {
  onClick: () => void;
}
const AddNotesButton: React.FC<AddNotesButtonProps> = ({
  onClick,
}) => {
  return (
    <Button className={styles.addNotesButton} onClick={onClick}>
      <PlusIcon className={styles.plusIcon} />
      <span>Add Notes</span>
    </Button>
  )
}

export default AddNotesButton