import React from 'react';

import styles from './errorLabel.module.scss';

import Error from '../../assets/icons/Error';

export interface ErrorLabelProps
  extends React.HTMLAttributes<HTMLLabelElement> {
  text?: string;
}

// Рефакторинг: изменил label на span
function ErrorLabel({ text = 'Error message', ...other }: ErrorLabelProps) {
  return (
    <span className={styles.errorMessage} {...other}>
      <Error />
      {text}
    </span>
  );
}

export default ErrorLabel;
