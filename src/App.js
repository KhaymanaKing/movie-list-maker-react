import { useState, useEffect } from 'react';
import './App.css';
import Movie from './Movie';
import MovieForm from './MovieForm';
import MovieList from './MovieList';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieColor, setMovieColor] = useState('');
  const [filterQuery, setFilterQuery] = useState('');

 

  function submitMovie(e){
    e.preventDefault();
    const movie = {
      title:movieTitle,
      director:movieDirector,
      year:movieYear,
      color:movieColor
    };
    setAllMovies([...allMovies, movie]);
    setMovieTitle('');
    setMovieDirector('');
    setMovieYear('');
    setMovieColor('');
  }
  function handleDeleteMovie(title){
    const movieToRemove = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(movieToRemove, 1);
    setAllMovies([...allMovies]);
  }
  function handleFilteredMovies(search){
    const matchingMovies = allMovies.filter((movie) => movie.title.includes(search));
    search ? setFilteredMovies(matchingMovies) : setFilteredMovies(allMovies);
  }
  //eslint-disable-next-line
  useEffect(() => handleFilteredMovies (filterQuery), [filterQuery]);
  return (
    <div className="App">
      <div className='current-movie'>
        {
          movieTitle || 
          movieDirector ||
          movieYear ?
            <Movie movie={{
              title:movieTitle,
              director:movieDirector,
              year:movieYear,
              color:movieColor
            }}/>
            : <div> Type to show preview</div>
        } 
      </div>
      <MovieForm
        submitMovie={submitMovie}
        movieTitle={movieTitle}
        setMovieTitle={ setMovieTitle}
        movieYear={movieYear}
        setMovieYear={ setMovieYear}
        movieDirector={movieDirector}
        setMovieDirector={ setMovieDirector}
        movieColor={movieColor}
        setMovieColor={ setMovieColor}
      />
      <div>
        Filter Movies
        <input onChange={(e) => setFilterQuery(e.target.value)}/>
      </div>
      <MovieList
        movies={ filterQuery ? filteredMovies : allMovies }
        handleDeleteMovie={handleDeleteMovie}/>
    </div>
  );
}

export default App;
