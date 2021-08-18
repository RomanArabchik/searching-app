import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from '../header/Header';
import MovieCard from '../movieCard/MovieCard';


const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8'

const App = () => {
  const [movies,setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        // setMovies(jsonResponse.Search);
        // setLoading(false);
      });
  }, []);

  return (
    <div className='App'>
      <Header text='Movie Catalog'/>

    </div>
  )
}

export default App;