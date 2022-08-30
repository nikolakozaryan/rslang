import React from 'react';
import { DOTS, usePagination } from '../../../hooks/usePagination';
import IPagination from './Interface';
import classes from './Pagination.module..scss';

const Pagination = ({ onPageChange, currentPage }: IPagination) => {
  const paginationRange = usePagination(currentPage);

  if (paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange.at(-1) as number;

  return (
    <ul className={classes.pagination__container}>
      <li className={`${classes.pagination__item} ${currentPage === 0 ? classes.disabled : ''}`} onClick={onPrevious}>
        <div className={`${classes.arrow} ${classes.left}`} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className={`${classes.pagination__item} ${classes.dots}`}>&#8230;</li>;
        }

        return (
          <li
            className={`${classes.pagination__item} ${pageNumber === currentPage + 1 ? classes.selected : ''}`}
            onClick={() => onPageChange((pageNumber as number) - 1)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={`${classes.pagination__item} ${currentPage === lastPage - 1 ? classes.disabled : ''}`}
        onClick={onNext}
      >
        <div className={`${classes.arrow} ${classes.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
