import React from 'react';

import styles from './errorLabel.module.scss';

import Error from '../../assets/icons/Error';

export interface ErrorLabelProps
  extends React.HTMLAttributes<HTMLLabelElement> {
  text?: string;
  htmlFor: string;
}

function ErrorLabel({
  text = 'Error message',
  htmlFor,
  ...other
}: ErrorLabelProps) {
  return (
    <label className={styles.errorMessage} htmlFor={htmlFor} {...other}>
      <Error />
      {text}
    </label>
  );
}

export default ErrorLabel;
