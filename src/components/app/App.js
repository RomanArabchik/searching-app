import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from '../header/Header';
import MovieCard from '../movieCard/MovieCard';
import Pagination from '../pagination/Pagination';
import Loading from '../loading/Loading';
// const film = 'pie'
// const url = `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman`;


const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrorMessage] = useState(null);
  const [totalRes, setTotalRes] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const [searchF, setSearchF] = useState('');

  // useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       console.log(jsonResponse)
  //       setMovies(jsonResponse.Search);
  //       setTotalRes(jsonResponse.totalResults);
  //       setLoading(false);
  //     });
  // }, []);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    search(searchF);
    console.log(searchF)
    console.log(pageNumber)
  };

  const handleSearchInputChanges = (e) => {
    setSearchF(e.target.value);
    search(e.target.value);
  }
  


  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchValue}&page=${currentPage}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === 'True') {
          setMovies(jsonResponse.Search);
          setTotalRes(jsonResponse.totalResults);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error)
        }
      })
  }

  return (
    <div className='App'>
      <Header 
        text='Movie Catalog'
        search={search}
        handleSearchInputChanges={handleSearchInputChanges}
      />
      <div className='movies'>
        {loading && !error ? (
          <Loading/>
        ) : error ? (
          <div className='error'>{error}</div>
        ) : ( 
          movies.map((movie, index) => (
            <MovieCard 
              key={`${movie.Title}-${index}`} 
              movie={movie}
            />
          ))
        )}
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalRes={totalRes}
        paginate={paginate}
      />
    </div>
  )
}

export default App;