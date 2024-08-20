import React from 'react';

import styles from './label.module.scss';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  theme?: 'light' | 'dark';
  label: string;
  htmlFor: string;
}

function Label({ theme = 'light', label, htmlFor, ...other }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${styles.label} ${styles[`label--${theme}`]}`}
      {...other}
    >
      {label}
    </label>
  );
}

export default Label;
