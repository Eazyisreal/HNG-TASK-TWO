import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const PAGE_SIZE = 10;

export const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        results: PAGE_SIZE,
      },
    });
    const results = response.data.results;
    console.log("Fetched top-rated movies:", results); // Log the fetched results
    return results;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
