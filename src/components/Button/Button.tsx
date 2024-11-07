import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  corner?: 'default' | 'edged';
}
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', corner, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${variant ? styles[variant] : ''} ${className ?? ''} ${corner ? styles[corner] : ''}`}
      {...props}>
      {children}
    </button>)
}

export default Button;