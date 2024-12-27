import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.poster} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>Calificación: {movie.rating}</p>
    <Link to={`/movie/${movie.id}`}>Ver detalles</Link>
  </div>
);

export default MovieCard;
