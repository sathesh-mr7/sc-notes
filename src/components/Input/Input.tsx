import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, className, ...props }) => {
  return (
    <input
      className={`${styles.input} ${className ?? ''}`}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}

export default Input;