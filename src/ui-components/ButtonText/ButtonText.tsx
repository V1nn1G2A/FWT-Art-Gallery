import React from 'react';
import styles from './buttonText.module.scss';

import PlusSmall from '../../assets/icons/PlusSmall';

// Варианты для кнопки
type Variant = 'primary' | 'text' | 'icon';

type Theme = 'light' | 'dark';

export interface ButtonTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: Variant;
  theme?: Theme;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const ButtonText: React.FC<ButtonTextProps> = ({
  label = 'ButtonText',
  variant = 'text',
  theme,
  icon: PlusSmallIcon = <PlusSmall />,
  iconPosition = 'left',
  ...other
}) => {
  return (
    <button
      className={`${styles.buttonText} ${styles[`buttonText--${variant}`]} ${styles[`buttonText--${theme}`]} ${styles[`buttonText--${iconPosition}`]}`}
      {...other}
      type="button"
    >
      {variant === 'icon' && (
        <span
          className={`${styles.buttonText_icon} ${styles[`buttonText_icon--${variant}`]}`}
        >
          {PlusSmallIcon}
        </span>
      )}

      <span
        className={`${styles.buttonText_label} ${styles[`buttonText_label--${variant}`]}`}
      >
        {label.toUpperCase()}
      </span>
    </button>
  );
};

export default ButtonText;
