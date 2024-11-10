import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../store/themeContext';
import { showModal } from '../../store/modalSlice';
import { NOTE_MODAL_ID } from '../../constants';

import AddNotesButton from '../AddNotesButton/AddNotesButton';
import SearchNotes from '../SearchNotes/SearchNotes';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import styles from './TopPanel.module.scss';
import { fitlerNotes, resetFilter } from '../../store/notesSlice';

const TopPanel: React.FC = () => {
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);
  const handleOnSearch = (text: string) => {
    if (text === '') {
      dispatch(resetFilter());
      return;
    }
    dispatch(fitlerNotes(text));
  }
  return (
    <section className={styles.container}>
      <div className={styles.sectionLeftSide}>
        <AddNotesButton onClick={() => dispatch(showModal(NOTE_MODAL_ID))} />
        <SearchNotes onChange={handleOnSearch} />
      </div>
      {!!themeContext ? <ToggleSwitch labels={['dark', 'light']} id="mode" onToggle={themeContext.toggleDarkMode} isChecked={themeContext.isDarkMode} /> : null}
    </section>
  )
}

export default TopPanel;