import React from 'react';

import styles from './pagination.module.scss';

interface PaginationButtonProps extends React.ComponentProps<'button'> {
  pageNumber: number | string;
  isActive: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  pageNumber,
  isActive,
  ...other
}) => {
  return (
    <li className={styles.pagination_item}>
      <button
        type="button"
        className={`${styles.pagination_button} ${isActive ? styles['pagination_button--active'] : ''}`}
        onClick={other.onClick}
      >
        {pageNumber}
      </button>
    </li>
  );
};

export default PaginationButton;
