import React from 'react';

import styles from './errorLabel.module.scss';

import Error from '../../assets/icons/Error';

export interface ErrorLabelProps
  extends React.HTMLAttributes<HTMLLabelElement> {
  text?: string;
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({
  text = 'Error message',
  ...other
}) => {
  return (
    <span className={styles.errorMessage} {...other}>
      <Error />
      {text}
    </span>
  );
};

export default ErrorLabel;
