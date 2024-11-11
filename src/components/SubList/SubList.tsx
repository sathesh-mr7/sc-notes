import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import styles from './SubList.module.scss';

interface SubListProps {
  basePath: string;
  listItems: { id: string, text: string }[];
  emptyListMessage: string;
  onRemoveItem?: (item: string) => void;
  onListItemClick?: () => void;
}

const SubList: React.FC<SubListProps> = ({
  basePath,
  listItems,
  emptyListMessage,
  onRemoveItem,
  onListItemClick = () => { }
}) => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      {listItems.length > 0 ? (
        <ul className={styles.subList}>
          {listItems.map(({ id, text }) => (
            <li key={id}>
              <Link onClick={onListItemClick} className={`${styles.link} ${pathname.indexOf(id) >= 0 ? styles.selected : ''}`} to={`${basePath}/${id}`}>
                <span className={styles.text}>{text}</span>
                {!!onRemoveItem ? (<span className={styles.removeList} onClick={() => onRemoveItem(text)}>
                  <TrashIcon className={styles.trashIcon} />
                </span>) : null}
              </Link>
            </li>
          ))}
        </ul>) :
        (<div className={styles.emptyListMessage}>
          {emptyListMessage}
        </div>)
      }
    </div>
  );
}

export default SubList;