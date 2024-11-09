import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../../store/themeContext';
import { eventDebounce } from '../../utils/helper';

import { ReactComponent as BoldIcon } from '../../assets/icons/bold.svg';
import { ReactComponent as UnderlineIcon } from '../../assets/icons/underline.svg';
import { ReactComponent as ItalicIcon } from '../../assets/icons/italic.svg';

import styles from './Toolbar.module.scss';

interface ToolbarProps {
  onOptionsChange: (selectedOption: TextFormatOption) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onOptionsChange,
}) => {
  const themeContext = React.useContext(ThemeContext);
  const [selectedOption, setSelectedOption] = useState<TextFormatOption>(() => ({
    bold: false,
    italic: false,
    underline: false,
    color: `${themeContext?.isDarkMode ? '#767994' : '#535353'}`,
    fontSize: 12,
  }));

  useEffect(() => {
    onOptionsChange(selectedOption);
  }, [JSON.stringify(selectedOption)]);

  return (
    <div className={styles.container}>
      <ul className={styles.toolbar}>
        <li className={styles.selected}>
          <input data-testid="bold-text" id="bold-text" type="checkbox" onChange={(e) => setSelectedOption((prevOption) => ({ ...prevOption, bold: e.target.checked }))} className={styles.checkbox} />
          <label className={styles.label} htmlFor="bold-text">
            <BoldIcon className={styles.icon} />
          </label>
        </li>
        <li>
          <input data-testid="italic-text" id="italic-text" type="checkbox" onChange={(e) => setSelectedOption((prevOption) => ({ ...prevOption, italic: e.target.checked }))} className={styles.checkbox} />
          <label className={styles.label} htmlFor="italic-text">
            <ItalicIcon className={styles.icon} />
          </label>
        </li>
        <li>
          <input data-testid="underline-text" id="underline-text" type="checkbox" onChange={(e) => setSelectedOption((prevOption) => ({ ...prevOption, underline: e.target.checked }))} className={styles.checkbox} />
          <label className={styles.label} htmlFor="underline-text">
            <UnderlineIcon className={styles.icon} />
          </label>
        </li>
        <li>
          <input data-testid="color-text" id="color-text" type="color" onChange={(e) => eventDebounce(() => setSelectedOption((prevOption) => ({ ...prevOption, color: e.target.value })), 1000)()} className={styles.colorPalette} />
        </li>
        <li>
          <select data-testid="font-size" className={styles.dropdown} defaultValue={12} onChange={(e) => setSelectedOption((prevOption) => ({ ...prevOption, fontSize: Number(e.target.value) }))}>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={14}>14</option>
            <option value={16}>16</option>
            <option value={18}>18</option>
            <option value={20}>20</option>
            <option value={24}>24</option>
            <option value={28}>28</option>
            <option value={32}>32</option>
            <option value={36}>36</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Toolbar;