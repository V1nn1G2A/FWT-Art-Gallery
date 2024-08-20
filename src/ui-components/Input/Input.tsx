import React from 'react';

import styles from './input.module.scss';

import Label from '../Label/Label';

import ErrorLabel from '../ErrorLabel/ErrorLabel';

export interface InputProps extends React.ComponentProps<'input'> {
  label: string;
  placeholder?: string;
  theme?: 'light' | 'dark';
  error?: string;
}

function Input({
  label,
  placeholder = 'placeholder',
  theme = 'light',
  error = '',
  ...other
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <Label label={label} htmlFor={label} theme={theme} />
      <input
        type="text"
        id={label}
        className={`${styles.input} ${styles[`input--${theme}`]} ${error && styles.inputError}`}
        placeholder={placeholder}
        {...other}
      />

      {error && <ErrorLabel text={error} />}
    </div>
  );
}

export default Input;
