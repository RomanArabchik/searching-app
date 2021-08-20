import React from 'react';
import './SearchInput.scss';

const SearchInput = ({handleSearchInputChanges}) => {
  return (
    <div className='search'>
      <input 
        className='search__input'
        placeholder='Type the movie name here'
        onChange={handleSearchInputChanges}
        type='text'
      />
    </div>

  )
}

export default SearchInput;