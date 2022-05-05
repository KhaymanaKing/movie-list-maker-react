import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, handleDeleteMovie }) {
  return (
    <div>
      {
        movies.map((movie, i) => <Movie key={`${movie.title}-${i}`}
          movie={movie}
          handleDeleteMovie={handleDeleteMovie}/>)
      }
    </div>
  );
}
