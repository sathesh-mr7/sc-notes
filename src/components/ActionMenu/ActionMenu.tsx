import React from 'react';
import styles from './ActionMenu.module.scss';

interface ActionProps {
  actions: Array<string>;
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, action: string) => void;
  className?: string;
  show: boolean;
}
const ActionMenu: React.FC<ActionProps> = ({ actions, className, onClick, show }) => {
  return (
    <ul className={`${styles.container} ${className ?? ''} ${show ? styles.show : ''}`}>
      {actions.map((action, index) => (
        <li key={index} onClick={(event) => onClick(event, action)}>{action}</li>
      ))}
    </ul>
  );
};

export default ActionMenu;