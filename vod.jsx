import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VOD = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/list/20?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US');
      const data = await response.json();
      setMovies(data.results); // נתונים עם סרטים נמצאים ב-results ולא ב-items
    };
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className="movies">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <Link to={`/movie/${movie.id}`} className="more-info-button">
                More Info
              </Link>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default VOD;
