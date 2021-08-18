import React from 'react';
import './MovieCard.scss';
import placeholderImg from '../../img/placeholder.jpg';

const MovieCard = ({movie}) => {
  const poster = movie.poster ? movie.poster : placeholderImg;
  
  return (
    <div className='movieCard'>
      <img className='movieCard__poster' src={poster} alt='eweweds'/>
      <p className='movieCard__name'>{movie.name}</p>
      <p className='movieCard__year'>{movie.year}</p>
      <p className='movieCard__id'>{movie.id}</p>
      <p className='movieCard__type'>{movie.type}</p>
    </div>
  )
}

export default MovieCard;