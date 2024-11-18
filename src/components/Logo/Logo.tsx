import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/light-mode-logo.png';
import darkLogo from '../../assets/imgs/dark-mode-logo.png';
import { ThemeContext } from '../../store/themeContext';
import styles from './Logo.module.scss';

const Logo = () => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <img src={themeContext?.isDarkMode ? darkLogo : logo} className={styles.logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;