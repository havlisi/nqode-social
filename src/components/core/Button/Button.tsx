import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  variant?: 'secondary';
  label: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant, type, onClick }) => {
  return (
    <button
      className={`${classes['c-button']} ${classes[variant ? `c-button--${variant}` : '']}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
