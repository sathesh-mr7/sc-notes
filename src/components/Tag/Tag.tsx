import React from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  color?: TagColor;
  text: string;
}
const Tag: React.FC<TagProps> = ({
  color = 'gray',
  text
}) => {
  return (
    <div className={`${styles.container} ${styles[color]}`}>
      {text}
    </div>
  )
};

export default Tag;
