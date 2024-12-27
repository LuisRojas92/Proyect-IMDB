import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError("Error al cargar los detalles de la película");
      }
    };
    fetchData();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Cargando...</p>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Calificación: {movie.rating}</p>
      <p>Fecha de lanzamiento: {movie.releaseDate}</p>
    </div>
  );
};

export default MovieDetails;
