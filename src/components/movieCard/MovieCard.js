import React from 'react';
import './MovieCard.scss';
import placeholderImg from '../../img/placeholder.jpg';

const MovieCard = ({movie}) => {
  const poster = movie.Poster === "N/A" ?  placeholderImg : movie.Poster ;
  
  return (
    <div className='movieCard'>
      <div className='movieCard__poster-wrapper'>
        <img className='movieCard__poster' src={poster} alt={`${movie.Title} poster`} />
      </div>
      <p className='movieCard__item'>Name: {movie.Title}</p>
      <p className='movieCard__item'>Year: {movie.Year}</p>
      <p className='movieCard__item'>imdbID: {movie.imdbID}</p>
      <p className='movieCard__item'>Type: {movie.Type}</p>
    </div>
  )
}

export default MovieCard;