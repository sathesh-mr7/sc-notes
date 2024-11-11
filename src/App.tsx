import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './store/themeContext';

import AllNotes from './components/AllNotes/AllNotes';
import FolderNotes from './components/FolderNotes/FolderNotes';
import Logo from './components/Logo/Logo';
import Layout from './components/AppLayout/Layout';
import MainPanel from './components/MainPanel/MainPanel';
import Navigation from './components/Navigation/Navigation';
import PortalRoot from './components/PortalRoot/PortalRoot';
import SidePanel from './components/SidePanel/SidePanel';
import TopPanel from './components/TopPanel/TopPanel';
import TrashedNotes from './components/TrashedNotes/TrashedNotes';

import styles from './App.module.scss';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('isDarkMode') === 'true');

  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
      <div className={styles.container} data-theme={isDarkMode ? 'dark' : 'light'}>
        <PortalRoot />
        <Layout>
          <BrowserRouter basename='/sc-notes'>
            {/* Side Panel with Navigation Menu */}
            <SidePanel>
              <Logo />
              <div className="divider" />
              <Navigation />
              <div className="divider" />
            </SidePanel>

            {/* Main Panel with Notes */}
            <MainPanel>
              {/* Routes */}
              <Routes>
                {/* Home */}
                <Route path="/" element={
                  <section className={styles.section}>
                    <TopPanel />
                    <AllNotes />
                  </section>
                } />
                {/* Folders */}
                <Route path="/folders/:folderId" element={
                  <section className={styles.section}>
                    <TopPanel />
                    <FolderNotes />
                  </section>
                } />
                {/* Trash */}
                <Route path="/trash" element={
                  <section className={styles.section}>
                    <TrashedNotes />
                  </section>
                } />
              </Routes>

            </MainPanel>
          </BrowserRouter>
        </Layout>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.wrapper}>
            <p>© 2024 Sathesh Kumar</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
