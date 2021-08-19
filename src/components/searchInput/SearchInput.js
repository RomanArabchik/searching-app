import React, {useState} from 'react';
import './SearchInput.scss';

const SearchInput = ({handleSearchInputChanges}) => {
  // const [searchValue, setSearchValue] = useState('');

  // const handleSearchInputChanges = (e) => {
  //   setSearchValue(e.target.value);
  //   props.search(e.target.value);
  // }

  // const callSearch = (e) => {
  //   e.preventDefault();
  //   props.search(searchValue);
  //   // clearInput();
  // }


  return (
    <form className='form'>
        <input 
        className='form__input'
        // value={searchValue}
        placeholder='Type the movie name'
        onChange={handleSearchInputChanges}
        type='text'
      />
      {/* <button 
        className='form__button'
        onClick={callSearch}
      >
        Search
      </button> */}
    </form>

  )
}

export default SearchInput;