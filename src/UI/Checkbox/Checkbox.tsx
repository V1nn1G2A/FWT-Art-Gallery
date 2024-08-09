import React from 'react';

import styles from './checkbox.module.scss';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
  theme?: 'light' | 'dark';
}

function Checkbox({
  active = false,
  theme = 'light',
  ...other
}: CheckboxProps) {
  return (
    <>
      <input
        className={`${styles.checkbox} ${styles[`checkbox--${active ? 'active' : ''}`]} ${styles[`checkbox--${theme}`]}`}
        type="checkbox"
        checked={active}
        {...other}
      />

      <span className={styles.checkbox__checkmark} />
    </>
  );
}

export default Checkbox;
