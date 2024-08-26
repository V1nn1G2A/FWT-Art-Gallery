import React, { useState, useEffect } from 'react';

import styles from './toast.module.scss';

import ButtonIcon from '../ButtonIcon/ButtonIcon';

import Error from '../../assets/icons/Error';
import Clear from '../../assets/icons/ClearIcon';
import Close from '../../assets/icons/Close';

export interface ToastProps {
  error: string;
  theme?: 'light' | 'dark';
  onClick: () => void;
}

const Toast: React.FC<ToastProps> = ({
  error,
  theme = 'light',
  onClick,
}: ToastProps) => {
  const [isClose, setClose] = useState(false);

  const checkWindowSize = () => {
    setClose(window.innerWidth > 768);
  };

  useEffect(() => {
    checkWindowSize();
  }, []);
  window.addEventListener('resize', checkWindowSize);

  return (
    <div className={`${styles.toast} ${styles[`toast--${theme}`]}`}>
      <div className={styles.toast_content}>
        <span className={styles.toast_error}>
          <Error />
          <span className={styles.toast_errorText}>
            {isClose ? 'Error!' : ''}
          </span>
        </span>
        <span className={styles.toast_errorMessage}>{error}</span>
      </div>

      <ButtonIcon
        variant="transparent"
        onClick={onClick}
        theme={theme}
        icon={isClose ? <Close /> : <Clear />}
      />
    </div>
  );
};

export default Toast;
