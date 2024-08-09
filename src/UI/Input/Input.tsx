import React from 'react';

import styles from './input.module.scss';

import Label from '../Label/Label';

import ErrorLabel from '../ErrorLabel/ErrorLabel';

export interface InputProps extends React.ComponentProps<'input'> {
  text: string;
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
  text,
  ...other
}: InputProps) {
  return (
    <>
      <Label text={label} htmlFor={label} theme={theme} />
      <input
        id={label}
        className={`${styles.input} ${styles[`input--${theme}`]} ${error && styles.inputError}`}
        placeholder={placeholder}
        value={text}
        {...other}
      />

      {error && <ErrorLabel text={error} htmlFor={label} />}
    </>
  );
}

export default Input;
