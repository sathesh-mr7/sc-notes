import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  return <button className={`${styles.button} ${styles[variant]} ${className ?? ''}`} {...props}>{children}</button>
}

export default Button;