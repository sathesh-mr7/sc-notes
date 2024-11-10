import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import styles from './SubList.module.scss';

interface SubListProps {
  listItems: string[];
  emptyListMessage: string;
  onRemoveItem: (item: string) => void;
}

const SubList: React.FC<SubListProps> = ({
  listItems,
  emptyListMessage,
  onRemoveItem,
}) => {
  return (
    <div className={styles.container}>
      {listItems.length > 0 ? (
        <ul className={styles.subList}>
          {listItems.map((item) => (
            <li key={item}>
              <span>{item}</span>
              <span className={styles.removeList} onClick={() => onRemoveItem(item)}>
                <TrashIcon className={styles.trashIcon} />
              </span>
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