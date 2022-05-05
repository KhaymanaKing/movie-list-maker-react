import { useState, useEffect } from 'react';
import './App.css';
import Movie from './Movie';
import MovieForm from './MovieForm';
import MovieList from './MovieList';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieDirector, setMovieDirector] = ('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieColor, setMovieColor] = useState('');

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
  return (
    <div className="App">

    </div>
  );
}

export default App;
