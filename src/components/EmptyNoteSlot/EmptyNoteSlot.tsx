import React from 'react';
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-sign.svg";
import styles from './EmptyNoteSlot.module.scss';

interface EmptyNoteSlotProps {
  onClick: () => void;
}

const EmptyNoteSlot: React.FC<EmptyNoteSlotProps> = ({
  onClick
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.emptyNoteText}>
        <PlusIcon className={styles.plusIcon} />
        <span>Add note</span>
      </div>
    </div>
  )
}

export default EmptyNoteSlot;