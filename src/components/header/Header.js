import React from 'react';
import './Header.scss';
import SearchInput from '../searchInput/SearchInput';

const Header = (props) => {
  return (
    <header className='header'>
      <h2>{props.text}</h2>
      <SearchInput/>
    </header>
  )

}

export default Header;