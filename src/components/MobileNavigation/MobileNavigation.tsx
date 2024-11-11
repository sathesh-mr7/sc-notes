import { NavLink, useLocation } from "react-router-dom"
import { showModal } from "../../store/modalSlice";

import { ReactComponent as FolderIcon } from '../../assets/icons/folder.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus-sign.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as ListIcon } from '../../assets/icons/list.svg';

import styles from './MobileNavigation.module.scss';
import { useDispatch } from "react-redux";
import { NOTE_MODAL_ID } from "../../constants";

interface MobileNavigationProps {
  toggleSideBar: () => void;
}
const MobileNavigation: React.FC<MobileNavigationProps> = ({
  toggleSideBar
}) => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <nav className={styles.container}>
      <NavLink to='/' className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>
        <ListIcon className={styles.icon} />
        <span className={styles.text}>Home</span>
      </NavLink>
      <div className={styles.link} onClick={() => dispatch(showModal(NOTE_MODAL_ID))}>
        <PlusIcon className={styles.icon} />
        <span className={styles.text}>Add Note</span>
      </div>
      <div className={styles.link} onClick={toggleSideBar}>
        <FolderIcon className={styles.icon} />
        <span className={styles.text}>Folders</span>
      </div>
      <NavLink to='/trash' className={`${styles.link} ${location.pathname === '/trash' ? styles.active : ''}`}>
        <TrashIcon className={styles.icon} />
        <span className={styles.text}>Trash</span>
      </NavLink>
    </nav>
  )
}

export default MobileNavigation;