import React from 'react';
import debounce from '../Debounce/debounce';
import './SearchInput.scss';

const SearchInput = ({handleSearchInputChanges}) => {
  return (
    <div className='search'>
      <input 
        className='search__input'
        placeholder='Type the movie name here'
        onChange={debounce(handleSearchInputChanges, 1000)}
        type='text'
      />
    </div>

  )
}

export default SearchInput;