import { useState } from "react";
import axios from "axios";
import Search from "../assets/images/Search.svg";
import { Link } from 'react-router-dom';
import LoadingSpinner from "./LoadingSpinner"; 

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });

      setSearchResults(response.data.results);
      setLoading(false);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="hidden lg:flex w-[32.8125rem] py-[.375rem] px-[.625rem] justify-between items-center rounded-[.375rem] border-2 border-[#D1D5DB]">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="text-white w-full font-DM text-base outline-none bg-transparent"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>
        <img src={Search} alt="Search" />
      </button>
      {loading && <LoadingSpinner /> }
      <div className="max-h-[600px] absolute top-20 snap-scroll-y-mandatory overflow-y-auto">
        {searchResults.length > 0 && (
          <div className="">
            {searchResults.map((result) => (
              <Link
                to={`/movie/${result.id}`}
                key={result.id}
                className="flex flex-col items-start gap-[0.625rem]"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  alt={result.title}
                />
                <p className="text-white font-DM font-bold text-lg">
                  {result.title}
                </p>
                <p className="text-white text-[0.85rem]">
                  Release Date: {result.release_date}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
