import { useState } from 'react';
import { ThemeContext } from './store/themeContext';
import { Navigation, Layout, Logo, SidePanel, MainPanel } from './components';

import styles from './App.module.scss';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={styles.app} data-theme={isDarkMode ? 'dark' : 'light'}>
        <Layout>
          <SidePanel>
            <Logo />
            <div className="divider" />
            <Navigation />
            <div className="divider" />
          </SidePanel>
          <MainPanel>
            <h1>Main Panel</h1>
          </MainPanel>
        </Layout>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
