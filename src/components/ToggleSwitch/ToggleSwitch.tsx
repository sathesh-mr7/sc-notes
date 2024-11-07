import React from 'react';
import styles from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
  id: string;
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
  labels: [string, string];
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  onToggle,
  isChecked,
  labels,
}) => {
  const [onText, offText] = labels;

  return (
    <div className={styles.container}>
      <input id={id} type="checkbox" checked={isChecked} onChange={(e) => onToggle(e.target.checked)} className={styles.checkbox} name="test" />
      <label className={styles.label} htmlFor={id}>
        <span className={`${styles.switch} ${isChecked ? styles.selected : ''}`}>{onText}</span>
        <span className={`${styles.switch} ${!isChecked ? styles.selected : ''}`}>{offText}</span>
      </label>
    </div>
  );
};
export default ToggleSwitch;