import React from 'react';
import plusIcon from '../../assets/icons/plus-sign.png';
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
        <img src={plusIcon} alt="+" />
        <span>Add note</span>
      </div>
    </div>
  )
}

export default EmptyNoteSlot;