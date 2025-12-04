import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MoreInfo = () => {
  const { id } = useParams(); // מקבלים את ה-ID של הסרט מה-URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);  // מצב טעינה
  const [error, setError] = useState(null); // מצב שגיאה
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US`);
        if (!response.ok) {
          throw new Error('Movie not found');  // אם ה-API מחזיר תשובה לא תקינה
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);  // סיים טעינה
      } catch (error) {
        setError(error.message);  // שגיאה אם לא מצליחים לשלוף את הסרט
        setLoading(false);  // סיים טעינה גם במקרה של שגיאה
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>; // אם יש שגיאה

  return (
    <div className="movie-details">
      <button onClick={() => navigate('/vod')} className="back-button">
        Back
      </button>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-detail-poster"
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
    </div>
  );
};

export default MoreInfo;
