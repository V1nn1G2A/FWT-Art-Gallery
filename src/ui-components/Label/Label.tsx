import React from 'react';

import styles from './label.module.scss';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  theme?: 'light' | 'dark';
  label: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({
  theme = 'light',
  label,
  htmlFor,
  ...other
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${styles.label} ${styles[`label--${theme}`]}`}
      {...other}
    >
      {label}
    </label>
  );
};

export default Label;
