import styles from './OptionList.module.scss';

interface OptionListProps {
  listItems: { id: string, name: string }[];
  onSelect: (id: string) => void;
  defaultSelectedOption?: string;
}

const OptionList: React.FC<OptionListProps> = ({ listItems, onSelect, defaultSelectedOption = "" }) => {
  return (
    <div className={styles.container}>
      <select className={styles.dropdownList} defaultValue={defaultSelectedOption} onChange={(event) => onSelect(event.target.value)} >
        <option key="none" value="">None</option>
        {listItems.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export default OptionList;