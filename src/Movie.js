import React from 'react';

export default function Movie(moviePreview) {
  return (
    <div className='movie'
      style={{ background: moviePreview.color }}
      onClick={() => moviePreview.handleDeleteMovie 
        && moviePreview.handleDeleteMovie(moviePreview.title) }>
      <h2>{moviePreview.movie.title}</h2>
      <p>Directed By:{moviePreview.movie.director}</p>
      <p> Released in:{moviePreview.movie.year}</p>
    </div>
  );
}
