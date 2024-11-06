import React from 'react';
import styles from './SidePanel.module.scss';

interface SidePanelProps {
  children: React.ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
  return (<div className={styles.container}>{children}</div>);
};
export default SidePanel;