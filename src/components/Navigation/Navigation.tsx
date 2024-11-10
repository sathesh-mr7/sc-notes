import React, { useState } from 'react';
import Folders from '../Folders/Folders';

import { ReactComponent as FolderIcon } from '../../assets/icons/folder.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';

import homeIcon from '../../assets/icons/home.png';
import tagIcon from '../../assets/icons/tag.png';

import styles from './Navigation.module.scss';
import CreateFolder from '../CreateFolder/CreateFolder';


interface NavigationProps {

}
const Navigation: React.FC<NavigationProps> = () => {
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const handleCreateFolder = () => {

  }
  const handleOnAddFolder = () => {
    setShowCreateFolder(!showCreateFolder);
  }
  return (
    <div className={styles.container}>
      {showCreateFolder ? <div className={styles.overlay} onClick={() => setShowCreateFolder(false)}></div> : null}
      <ul className={styles.list}>
        <li className={styles.selected}>
          <div className={styles.textWithIcon}>
            <img className={styles.icon} src={homeIcon} alt='home' />
            <span>Home</span>
          </div>
        </li>
        <li>
          <div className={styles.textWithIcon}>
            <FolderIcon className={`${styles.icon} ${styles.folderIcon}`} />
            <span>Folders</span>
            <i className={`${styles.addFolder} ${styles.right}`} onClick={handleOnAddFolder}><PlusIcon className={`${styles.icon}`} /></i>
          </div>
          {showCreateFolder ? <CreateFolder className={styles.createFolder} onClose={() => setShowCreateFolder(false)} /> : null}
          <Folders />
        </li>
        <li>
          <div className={styles.textWithIcon}>
            <img className={styles.icon} src={tagIcon} alt='labels' />
            <span>Labels</span>
          </div>
          <ul className={styles.innerList}>
            <li>Label Name 1</li>
            <li>Label Name 2</li>
            <li>Label Name 3</li>
          </ul>
        </li>
        <li>
          <div className={styles.textWithIcon}>
            <TrashIcon className={`${styles.icon} ${styles.trashIcon}`} />
            <span>Trash</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;