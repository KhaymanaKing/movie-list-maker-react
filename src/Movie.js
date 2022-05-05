import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div className='movie'
      style={{ backgroundColor: `#${movie.color}` }}
      onClick={() => handleDeleteMovie 
        && handleDeleteMovie(movie.title) }>
      <h2>{movie.title}</h2>
      <p>Directed By:{movie.director}</p>
      <p> Released in:{movie.year}</p>
    </div>
  );
}
