import React from 'react';
import styles from './buttonIcon.module.scss';

// Варианты для кнопки
type Variant =
  | 'basket'
  | 'basketOnImage'
  | 'arrow'
  | 'themeButton'
  | 'transparent';

type Theme = 'light' | 'dark';

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  theme?: Theme;
  onClick: () => void;
  icon: React.ReactNode;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  variant = 'basket',
  theme = 'light',
  onClick,
  icon,
  ...other
}) => {
  return (
    <button
      className={`${styles.buttonIcon} ${styles[`buttonIcon--${variant}`]} ${styles[`buttonIcon--${theme}`]} `}
      {...other}
      type="button"
      onClick={onClick}
    >
      <span
        className={`${styles.buttonIcon_icon} ${styles[`buttonIcon_icon--${variant}`]}`}
      >
        {icon}
      </span>
    </button>
  );
};

export default ButtonIcon;
