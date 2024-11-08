import ReactDOM from 'react-dom';
import { PORTAL_ROOT_ID } from '../../constants';
import styles from './Portal.module.scss';

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRoot = document.getElementById(PORTAL_ROOT_ID);
  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.portal}>
      {children}
    </div>,
    portalRoot
  );
}
export default Portal;