import React from 'react';
import './pagination.scss'

const Pagination = ({moviesPerPage, totalRes, paginate}) => {
  const pageNumbers = [];

  for (let i=1; i <= Math.ceil(totalRes/moviesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className='pagination'>
        {
          pageNumbers.map(number => (
            <li 
              className='pagination__item' 
              key={number}
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination;