import { forwardRef } from 'react';

import styles from './input.module.scss';

import Label from '../Label/Label';

import ErrorLabel from '../ErrorLabel/ErrorLabel';

export interface InputProps {
  label: string;
  placeholder?: string;
  theme?: 'light' | 'dark';
  error?: string;
  type?: 'text' | 'number' | 'email' | 'password';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { label, type, error, placeholder, theme, ...rest } = props;

    return (
      <div className={styles.inputContainer}>
        <Label label={label} htmlFor={label} theme={theme} />
        <input
          ref={ref}
          type={type}
          id={label}
          className={`${styles.input} ${styles[`input--${theme}`]} ${error && styles.inputError}`}
          placeholder={placeholder}
          {...rest}
        />

        {error && <ErrorLabel text={error} />}
      </div>
    );
  }
);

export default Input;
