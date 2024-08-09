import React from 'react';

import styles from './textarea.module.scss';

import Label from '../Label/Label';

import ErrorLabel from '../ErrorLabel/ErrorLabel';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  theme?: 'light' | 'dark';
  error?: string;
  onChange: () => void;
}

function Textarea({
  label,
  theme = 'light',
  error = '',
  onChange,
  ...other
}: TextareaProps) {
  return (
    <>
      <Label text={label} htmlFor={label} theme={theme} />
      <textarea
        onChange={onChange}
        id={label}
        className={`${styles.textarea} ${styles[`textarea--${theme}`]}  ${error && styles.inputError}`}
        {...other}
      />

      {error && <ErrorLabel text={error} htmlFor={label} />}
    </>
  );
}

export default Textarea;
