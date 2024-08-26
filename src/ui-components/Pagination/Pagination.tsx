import React from 'react';

import { IPaginationProps } from '../../models/IPagination';

import { usePagination, DOTS } from '../../hooks/usePagination';
import styles from './pagination.module.scss';

import PaginationButton from './PaginationButton';
import PaginationDots from './PaginationDots';
import PaginationArrowButton from './PaginationArrowButton';

const Pagination: React.FC<IPaginationProps> = ({
  totalCount = 60,
  siblingCount = 1,
  pageSize = 6,
  currentPage = 1,
  theme,
  onClick,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={`${styles.pagination} ${styles[`pagination--${theme}`]}`}>
      <PaginationArrowButton
        onClick={() => onClick(currentPage - 1)}
        direction="prev"
        disabled={currentPage === 1}
      />

      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <PaginationDots key={`dots-${currentPage}`} />;
        }

        return (
          <PaginationButton
            key={`page-${pageNumber}`}
            pageNumber={pageNumber}
            isActive={pageNumber === currentPage}
            onClick={() => onClick(pageNumber)}
          />
        );
      })}

      <PaginationArrowButton
        direction="next"
        disabled={currentPage === lastPage}
        onClick={() => onClick(currentPage + 1)}
      />
    </ul>
  );
};

export default Pagination;
