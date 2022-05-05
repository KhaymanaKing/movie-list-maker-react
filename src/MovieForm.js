import React from 'react';

export default function MovieForm(movieInfo) {
  return (
    <div>
      <form className='movie-form' onSubmit={movieInfo.submitMovie}>
        <label>
            Title:
          <input required value ={movieInfo.movieTitle} onChange={(e) => movieInfo.setMovieTitle(e.target.value)}/>
        </label>
        <label>
            Director:
          <input required value ={movieInfo.movieDirector} onChange={(e) => movieInfo.setMovieDirector(e.target.value)}/>
        </label>
        <label>
            Year Released:
          <input required type="number" value={movieInfo.movieYear} onChange={(e) => movieInfo.setMovieYear(e.target.value)}/>
        </label>
        <label>
            Select Poster Color
          <select required value ={movieInfo.movieColor} onChange={(e) => movieInfo.setMovieColor(e.target.value)}>
            <option value='7FFFD4'>Green</option>
            <option value='1E90FF'>Blue</option>
            <option value='FF6347'>Red</option>
            <option value='8B008B'>Purple</option>
          </select>
        </label>
        <button>Add Movie Poster</button>
      </form>

    </div>
  );
}
