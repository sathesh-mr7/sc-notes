import styles from './Layover.module.scss';

interface LayoverProps {
  onClick?: () => void;
}
const Layover: React.FC<LayoverProps> = ({ onClick }) => {
  return <div onClick={onClick} data-testid='layover-id' className={styles.layover} />;
}
export default Layover;