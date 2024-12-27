import axios from "axios";

const API_KEY = "TU_API_KEY";
const BASE_URL = "https://developer.imdb.com";

export const fetchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movies`, {
      params: {
        apiKey: API_KEY,
        query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener las películas");
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movies/${id}`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los detalles de la película");
  }
};
