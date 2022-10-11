import * as React from 'react';
import { usePagination, DOTS } from 'Hooks/usePagination';
import { ReactComponent as ChevronIcon } from 'assets/svg/chevron-down.svg';
import './Pagination.styles.scss';
import NumberOfDataToShow from './NumberOfDataToShow/NumberOfDataToShow.component';

interface PaginationProps {
  onPageChange: (num: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
  changePageSize: (pageSize: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (
    currentPage === 0 ||
    (paginationRange?.length && paginationRange?.length < 2)
  ) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <div className='custom-pagination'>
      <NumberOfDataToShow />
      <ul className={`pagination-container ${className}`}>
        <li
          className={`pagination-item ${currentPage === 1 && 'disabled'}`}
          onClick={onPrevious}
        >
          <div className='arrow left'>
            <ChevronIcon />
          </div>
        </li>
        {paginationRange?.map((pageNumber: any, index: number) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className='pagination-item dots'>
                &#8230;
              </li>
            );
          }

          return (
            <li key={index}
              className={`pagination-item ${
                pageNumber === currentPage && 'selected'
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={`pagination-item ${
            currentPage === lastPage && 'disabled'
          }`}
          onClick={onNext}
        >
          <div className='arrow right'>
            <ChevronIcon />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
