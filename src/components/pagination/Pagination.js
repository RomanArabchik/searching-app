import React, { useState } from 'react';
import './pagination.scss'

const Pagination = ({totalRes, paginate}) => {
  const [currentPage, setCurrentPage] = useState (1);
  const [moviesPerPage] = useState(10);
  const pagesCount = Math.ceil(totalRes/moviesPerPage);
  const pageNumbers = [];

  for (let i=1; i <= pagesCount; i++) {
    pageNumbers.push(i)
  }

  const renderPaginate = () =>{
    if (currentPage > 5) {
      return (
        pageNumbers
        .slice(currentPage - 5, currentPage + 5)
        .map(number => (
          <li 
            className={currentPage === number ? 'pagination__selected-item' : 'pagination__item'} 
            key={number}
            onClick={() => {
              paginate(number);
              setCurrentPage(number);
            }}
          >
            {number}
          </li>
        ))
      )
    } else {
      return (
        pageNumbers
        .slice(0, 10)
        .map(number => (
          <li 
            className={currentPage === number ? 'pagination__selected-item' : 'pagination__item'} 
            key={number}
            onClick={() => {
              paginate(number);
              setCurrentPage(number);
            }}
          >
            {number}
          </li>
        ))
      )
    }
  }


  return (
    <div className='pagination'>
      <button
        disabled={currentPage === 1 ? true : false}
        className='pagination__button-prev'
        onClick={() => {
          paginate(currentPage - 1);
          setCurrentPage(currentPage - 1);
        }}
      />
      <ul className='pagination__items'>
        {renderPaginate()}
      </ul>
      <button
        disabled={currentPage === pageNumbers.length ? true : false}
        className='pagination__button-next'
        onClick={() => {
          paginate(currentPage + 1);
          setCurrentPage(currentPage + 1);
        }}
      />
    </div>
  )
}

export default Pagination;