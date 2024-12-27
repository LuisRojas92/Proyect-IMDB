import React, { useState, useEffect } from "react";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies(query, page);
        setMovies(data.results);
      } catch (err) {
        setError("Error al cargar las películas");
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(e.target.search.value);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Buscar películas..." />
        <button type="submit">Buscar</button>
        <select onChange={(e) => setRating(e.target.value)}>
          <option value="">Todas las calificaciones</option>
          <option value="8">8+ estrellas</option>
          <option value="7">7+ estrellas</option>
        </select>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="movie-list">
        {movies
          .filter((movie) => (rating ? movie.rating >= rating : true))
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Home;
