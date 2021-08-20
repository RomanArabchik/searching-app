import React, { useState } from 'react';
import './App.scss';
import Header from '../header/Header';
import MovieCard from '../movieCard/MovieCard';
import Pagination from '../pagination/Pagination';
import Loading from '../loading/Loading';

// import debounce from '../Debounce/debounce';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErrorMessage] = useState(null);
  const [totalResult, setTotalRes] = useState(0);
  const [searchMovie, setSearchMovie] = useState('');

  const paginate = pageNumber => {
    search(searchMovie, pageNumber);
  };

  const handleSearchInputChanges = (e) => {
    setSearchMovie(e.target.value);
    search(e.target.value);
  }
  
  const saveMovies = (response) => {
    if (response === undefined) {
      setMovies([]);
    } else {
      setMovies(response);
    }
  }

  const search = (searchValue, currentPage = 1) => {
    setLoading(true);
    setErrorMessage(null);

      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchValue}&page=${currentPage}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === 'True') {
          
          saveMovies(jsonResponse.Search);
          setTotalRes(jsonResponse.totalResults);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setTotalRes(0);
          setSearchMovie('');
        }
      })
  }

  const renderMovies = () => {
    if (movies.length < 1) {
      return (
        <div className='enter'>Enter the movie name above</div>
      )
    } else {
      return (
        <div>
          <div className='result'> You searched for: {searchMovie}, {totalResult} results found</div>
          <div className='movies'>
            {movies.map((movie, index) => (
              <MovieCard 
                key={`${movie.Title}-${index}`} 
                movie={movie}
              /> ))
            }
          </div>
        </div>  
      )
    }
  }

  const renderPagination = () => {
    if (movies.length > 0 && !error) {
      return (
        <Pagination
        totalRes={totalResult}
        paginate={paginate}
      />
      )
    }
  }

  return (
    <div className='App'>
      <Header 
        search={search}
        handleSearchInputChanges={handleSearchInputChanges}
      />
      <div className='movies-wrapper'>
        {loading && !error ? (
          <Loading/>
        ) : error ? (
          <div className='error'>{error}</div>
        ) : ( 
          renderMovies()
        )}
      </div>
      {renderPagination()}
    </div>
  )
}

export default App;