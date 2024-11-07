import Button from "../Button/Button"
import PlusIcon from "../../assets/icons/plus-sign-white.png"
import styles from "./AddNotesButton.module.scss"
import React from "react";

interface AddNotesButtonProps {
  onClick: () => void;
}
const AddNotesButton: React.FC<AddNotesButtonProps> = ({
  onClick,
}) => {
  return (
    <Button className={styles.addNotesButton} onClick={onClick}>
      <img src={PlusIcon} alt="+" />
      <span>Add Notes</span>
    </Button>
  )
}

export default AddNotesButton