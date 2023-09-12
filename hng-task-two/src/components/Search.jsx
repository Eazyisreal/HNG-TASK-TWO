import { useState } from "react";
import axios from "axios";
import Search from "../assets/images/search.svg";

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
        const response = await axios.get(`${BASE_URL}/search/movie`,
        {
          params: {
            api_key: API_KEY, 
            query: query,
          },
        }
      );

      setSearchResults(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setLoading(false);
    }
  };

  return (
    <div className="hidden lg:flex w-[32.8125rem] py-[.375rem] px-[.625rem] justify-between items-center rounded-[.375rem] border-2 border-[#D1D5DB]">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="text-white font-DM text-base outline-none bg-transparent"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <img src={Search} alt="Search" />
      </button>
      {loading && <p className="text-white absolute top-20">Loading...</p>}
      {searchResults.length > 0 && (
        <div className="absolute top-20 flex flex-col gap-12 ">
          <ul>
            {searchResults.map((result) => (
              <li className="text-white flex flex-col font-DM text-[.85rem]" key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
