import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './MovieItem';
import MovieForm from './AddMovieForm';

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (title, rating) => {
    const newMovies = [...movies, { title, rating }];
    setMovies(newMovies);
  };

  const deleteMovie = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  }

  return (
    <div className="App container">
      <h1 className="text-center my-4">My Movies</h1>
      <MovieForm addMovie={addMovie} setMovies={setMovies} movies={movies} />
      <div className="row mt-4">
        {movies.map((movie, index) => (
          <Movie key={index} title={movie.title} rating={movie.rating} onDelete={() => deleteMovie(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;