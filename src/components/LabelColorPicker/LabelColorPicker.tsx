import styles from './LabelColorPicker.module.scss';

const labelColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'] as TagColor[];
interface LabelColorPickerProps {
  onColorPick: (color: TagColor | undefined) => void;
  selectedColor?: string;
}
const LabelColorPicker: React.FC<LabelColorPickerProps> = ({ onColorPick, selectedColor }) => {
  return (
    <div className={styles.container}>
      {labelColors.map((color) => (
        <button
          key={color}
          data-testid={color}
          className={`${styles.color} ${styles[color]} ${selectedColor === color ? styles.selected : ''}`}
          onClick={() => { onColorPick(color) }}
        />
      ))}
      <button className={`${styles.color} ${styles.reset}`} onClick={() => { onColorPick(undefined) }}>
        x
      </button>
    </div>
  );
};
export default LabelColorPicker;
