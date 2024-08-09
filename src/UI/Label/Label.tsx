import React from 'react';

import styles from './label.module.scss';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  theme?: 'light' | 'dark';
  text: string;
  htmlFor: string;
}

function Label({ theme = 'light', text, htmlFor, ...other }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${styles.label} ${styles[`label--${theme}`]}`}
      {...other}
    >
      {text}
    </label>
  );
}

export default Label;
