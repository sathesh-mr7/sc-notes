import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CreateFolder from '../CreateFolder/CreateFolder';
import Folders from '../Folders/Folders';
import { ReactComponent as FolderIcon } from '../../assets/icons/folder.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';

import homeIcon from '../../assets/icons/home.png';

import styles from './Navigation.module.scss';


interface NavigationProps {
  isMobile?: boolean;
  show?: boolean;
  onClick?: () => void;
}
const Navigation: React.FC<NavigationProps> = ({
  isMobile,
  show,
  onClick = () => { }
}) => {
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const location = useLocation();

  const handleOnAddFolder = () => {
    setShowCreateFolder(!showCreateFolder);
  }
  return (
    <div className={`${styles.container} ${isMobile && show ? styles.active : ''}`}>
      {showCreateFolder ? <div className={styles.overlay} onClick={() => setShowCreateFolder(false)}></div> : null}
      <ul className={styles.list}>
        <li className={location.pathname === '/' ? styles.selected : ''} onClick={onClick}>
          <Link className={styles.link} to="/">
            <div className={styles.textWithIcon}>
              <img className={styles.icon} src={homeIcon} alt='home' />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname.indexOf('/folders') >= 0 ? styles.selected : ''}>
          <div className={styles.textWithIcon}>
            <FolderIcon className={`${styles.icon} ${styles.folderIcon}`} />
            <span>Folders</span>
            <i className={`${styles.addFolder} ${styles.right}`} onClick={handleOnAddFolder}><PlusIcon className={`${styles.icon}`} /></i>
          </div>
          {showCreateFolder ? <CreateFolder className={styles.createFolder} onClose={() => setShowCreateFolder(false)} /> : null}
          <Folders onFolderClick={onClick} />
        </li>
        <li className={location.pathname.indexOf('/trash') >= 0 ? styles.selected : ''} onClick={onClick}>
          <Link className={styles.link} to="/trash">
            <div className={styles.textWithIcon}>
              <TrashIcon className={`${styles.icon} ${styles.trashIcon}`} />
              <span>Trash</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;