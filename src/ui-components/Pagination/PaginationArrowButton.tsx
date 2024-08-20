import React from 'react';
import styles from './pagination.module.scss';

import ArrowDefault from '../../assets/icons/ArrowDefault';

interface PaginationArrowButtonProps extends React.ComponentProps<'button'> {
  direction: 'prev' | 'next';
}

function PaginationArrowButton({
  direction,
  ...other
}: PaginationArrowButtonProps) {
  return (
    <li className={styles.pagination_item}>
      <button
        type="button"
        aria-label={direction === 'prev' ? 'Previous Page' : 'Next Page'}
        className={`${styles.pagination_button} ${styles[`pagination_button--${direction}`]}`}
        disabled={other.disabled}
        onClick={other.onClick}
      >
        <ArrowDefault />
      </button>
    </li>
  );
}

export default PaginationArrowButton;
