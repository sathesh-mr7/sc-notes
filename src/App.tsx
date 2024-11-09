import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from './store/themeContext';
import { showModal } from './store/modalSlice';

import { Layout, Logo, MainPanel, Navigation, SidePanel, ToggleSwitch } from './components';
import AddNotesButton from './components/AddNotesButton/AddNotesButton';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import FilterBar from './components/FilterBar/FilterBar';
import Notes from './components/Notes/Notes';
import PortalRoot from './components/PortalRoot/PortalRoot';
import SearchNotes from './components/SearchNotes/SearchNotes';

import styles from './App.module.scss';
import { NOTE_MODAL_ID } from './constants';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('isDarkMode') === 'true');
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
      <div className={styles.container} data-theme={isDarkMode ? 'dark' : 'light'}>
        <PortalRoot />
        <Layout>
          <SidePanel>
            <Logo />
            <div className="divider" />
            <Navigation />
            <div className="divider" />
          </SidePanel>
          <MainPanel>
            <section className={`${styles.section} ${styles.topSection}`}>
              <Breadcrumbs />
              <ToggleSwitch labels={['dark', 'light']} id="mode" onToggle={toggleDarkMode} isChecked={isDarkMode} />
            </section>
            <section className={styles.section}>
              <AddNotesButton onClick={() => dispatch(showModal(NOTE_MODAL_ID))} />
              <SearchNotes onChange={(text) => console.log(text)} />
            </section>
            <section className={`${styles.filterBar} ${styles.section}`}>
              <FilterBar />
            </section>
            <section className={`${styles.filterBar} ${styles.section}`}>
              <Notes />
            </section>
          </MainPanel>
        </Layout>
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
