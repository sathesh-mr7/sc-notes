import React from 'react';
import logo from '../../assets/imgs/light-mode-logo.png';
import darkLogo from '../../assets/imgs/dark-mode-logo.png';
import { ThemeContext } from '../../store/themeContext';
import styles from './Logo.module.scss';

const Logo = () => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <div className={styles.container}>
      {themeContext?.isDarkMode ? <img src={darkLogo} className={styles.logo} alt="logo" /> : <img src={logo} className={styles.logo} alt="logo" />}
    </div>
  );
};
export default Logo;