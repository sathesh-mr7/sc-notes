import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md';
  variant?: 'primary' | 'secondary' | 'tertiary';
  corner?: 'default' | 'edged';
}
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', corner, size = 'md', className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[variant]} ${className ?? ''} ${corner ? styles[corner] : ''}`}
      {...props}>
      {children}
    </button>)
}

export default Button;