import React from 'react';
import styles from './MainPanel.module.scss';

interface MainPanelProps {
  children: React.ReactNode;
}
const MainPanel: React.FC<MainPanelProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>);
};
export default MainPanel;