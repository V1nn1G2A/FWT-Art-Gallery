import React from 'react';

import styles from './checkbox.module.scss';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: 'light' | 'dark';
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  theme = 'light',
  label,
  ...other
}) => {
  return (
    <label
      htmlFor={label}
      className={`${styles.checkboxLabel} ${styles[`checkboxLabel--${theme}`]}`}
    >
      <input
        className={`${styles.checkbox} ${styles[`checkbox--${theme}`]}`}
        type="checkbox"
        {...other}
        id={label}
      />
      {label}
    </label>
  );
};

export default Checkbox;
