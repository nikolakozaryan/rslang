import React from 'react';
import { DOTS, usePagination } from '../../../hooks/usePagination';
import IPagination from './Interface';
import classes from './Pagination.module..scss';

const Pagination = ({ onPageChange, currentPage }: IPagination) => {
  const paginationRange = usePagination(currentPage);

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange.at(-1);

  return (
    <ul className={classes.pagination__container}>
      {/* Left navigation arrow */}
      <li className={`${classes.pagination__item} ${currentPage === 1 ? classes.disabled : ''}`} onClick={onPrevious}>
        <div className={`${classes.arrow} ${classes.left}`} />
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className={`${classes.pagination__item} ${classes.dots}`}>&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            className={`${classes.pagination__item} ${pageNumber === currentPage ? classes.selected : ''}`}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={`${classes.pagination__item} ${currentPage === lastPage ? classes.disabled : ''}`}
        onClick={onNext}
      >
        <div className={`${classes.arrow} ${classes.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
