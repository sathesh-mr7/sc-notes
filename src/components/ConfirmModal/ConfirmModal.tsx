import styles from './ConfirmModal.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Button from '../Button/Button';

interface ConfirmModalProps {
  confirmText: string;
  isOpen: boolean;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({
  confirmText,
  isOpen,
  message,
  onClose,
  onConfirm,
  title,
}) => {
  return (
    <div className={`${styles.container} ${isOpen ? styles.modal : styles.hidden}`}>
      <div className={styles.modalBody}>
        <header className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          <button onClick={onClose} className={styles.closeButton}>
            <CloseIcon className={styles.icon} />
          </button>
        </header>
        <main className={styles.content}>
          <p className={styles.message}>{message}</p>
        </main>
        <footer className={styles.footer}>
          <Button variant='secondary' onClick={onClose} className={styles.button}>Cancel</Button>
          <Button variant='tertiary' onClick={onConfirm} className={styles.button}>{confirmText}</Button>
        </footer>
      </div>
    </div>
  );
};

export default ConfirmModal;