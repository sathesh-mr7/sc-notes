import React from 'react';

import { ReactComponent as FolderIcon } from '../../assets/icons/folder.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import homeIcon from '../../assets/icons/home.png';
import tagIcon from '../../assets/icons/tag.png';

import styles from './Navigation.module.scss';


interface NavigationProps {

}
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.selected}>
          <div className={styles.textWithIcon}>
            <img className={styles.icon} src={homeIcon} alt='home' />
            <span>Home</span>
          </div>
        </li>
        <li>
          <div className={styles.textWithIcon}>
            {/* <img className={styles.icon} src={folderIcon} alt='folders' /> */}
            <FolderIcon className={`${styles.icon} ${styles.folderIcon}`} />
            <span>Folders</span>
            {/* <img className={`${styles.icon} ${styles.right}`} src={plusIcon} alt='add folder' /> */}
            <PlusIcon className={`${styles.icon} ${styles.right}`} />
          </div>
          <ul className={styles.innerList}>
            <li>Folder Name 1</li>
            <li>Folder Name 2</li>
            <li>Folder Name 3</li>
          </ul>
        </li>
        <li>
          <div className={styles.textWithIcon}>
            <img className={styles.icon} src={tagIcon} alt='labels' />
            <span>Labels</span>
            <PlusIcon className={`${styles.icon} ${styles.right}`} />
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