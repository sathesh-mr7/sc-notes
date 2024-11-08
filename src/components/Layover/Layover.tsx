import ReactDOM from 'react-dom';
import { PORTAL_ROOT_ID } from '../../constants';
import styles from './Layover.module.scss';

interface LayoverProps {
  children: React.ReactNode;
}

const Layover: React.FC<LayoverProps> = ({ children }) => {
  const portalRoot = document.getElementById(PORTAL_ROOT_ID);
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.layover}>
      {children}
    </div>,
    portalRoot
  );
}
export default Layover;