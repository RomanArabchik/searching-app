import React, {useState} from 'react';

const SearchInput = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <input
      value={searchValue}
      onChange={handleSearchInputChanges}
      type='text'
    />
  )
}

export default SearchInput;