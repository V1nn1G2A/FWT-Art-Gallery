// src/UI/Button/Button.tsx
import React from 'react';
import styles from './button.module.scss';

import PlusSmall from '../../assets/icons/plusSmall';
import BasketDefault from '../../assets/icons/basketDefault';
import ArrowDefault from '../../assets/icons/arrowDefault';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'primary' | 'text' | 'basket' | 'basketImage' | 'arrow';
  theme: 'light' | 'dark';
}

function Button({
  label = 'Button',
  variant = 'primary',
  theme,
  ...props
}: ButtonProps) {
  const renderIcon = () => {
    switch (variant) {
      case 'text':
        return <PlusSmall />;
      case 'basket':
        return <BasketDefault />;
      case 'basketImage':
        return <BasketDefault />;
      case 'arrow':
        return <ArrowDefault />;
      default:
        return null;
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${theme}`]} `}
      {...props}
      type="button"
    >
      {(variant === 'text' || variant === 'basket' || variant === 'arrow') && (
        <span
          className={`${styles.button_icon} ${styles[`button_icon--${variant}`]}`}
        >
          {renderIcon()}
        </span>
      )}
      {(variant === 'text' || variant === 'primary') && (
        <span
          className={`${styles.button_label} ${styles[`button_label--${variant}`]}`}
        >
          {label.toUpperCase()}
        </span>
      )}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  label: 'Button',
};

export default Button;
