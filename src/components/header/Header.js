import React from 'react';
import './Header.scss';
import SearchInput from '../searchInput/SearchInput';

const Header = (props) => {
  return (
    <header className='header'>
      <h2 className='header__title'>Movie Catalog</h2>
      <SearchInput 
        search={props.search}
        handleSearchInputChanges={props.handleSearchInputChanges}
      />
      <div className='header__user'>
        <img className='header__img' src='https://img.icons8.com/ios-glyphs/30/000000/user--v1.png' alt='user'/>
        <p className='header__user-text'>Roman Arabchik</p>
        <img className='header__drop' src='https://img.icons8.com/ios-filled/50/000000/sort-down.png' alt='drop'/>
      </div>
    </header>
  )
}

export default Header;