import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../store/themeContext';
import { showModal } from '../../store/modalSlice';
import { filterNotes, resetFilter } from '../../store/notesSlice';

import { NOTE_MODAL_ID } from '../../constants';

import AddNotesButton from '../AddNotesButton/AddNotesButton';
import SearchNotes from '../SearchNotes/SearchNotes';
import ToggleSwitch from '../../ui/ToggleSwitch/ToggleSwitch';

import styles from './TopPanel.module.scss';

const TopPanel: React.FC = () => {
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);

  const handleOnSearch = (text: string) => {
    if (text === '') {
      dispatch(resetFilter());
      return;
    }
    dispatch(filterNotes(text));
  }
  return (
    <section className={styles.container}>
      <div className={`${styles.sectionLeftSide} ${styles.hide}`}>
        <AddNotesButton onClick={() => dispatch(showModal(NOTE_MODAL_ID))} />
        <SearchNotes onChange={handleOnSearch} />
      </div>
      {!!themeContext ? <ToggleSwitch labels={['dark', 'light']} id="mode" onToggle={themeContext.toggleDarkMode} isChecked={themeContext.isDarkMode} /> : null}
    </section>
  )
}

export default TopPanel;