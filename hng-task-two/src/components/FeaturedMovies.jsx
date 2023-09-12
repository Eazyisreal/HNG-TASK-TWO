import "../index.css";
import { useEffect, useState } from "react";
import Arrow from "../assets/images/arrow_right.svg";
import { fetchTopRatedMovies } from "../services/api";

export default function FeaturedMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopRatedMovies();
        const top10Movies = data.slice(0, 10);
        setMovies(top10Movies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const constructPosterUrl = (relativePath) => {
    if (relativePath) {
      const baseUrl = "https://image.tmdb.org/t/p/w500";
      return `${baseUrl}${relativePath}`;
    }
    return "URL_TO_PLACEHOLDER_IMAGE";
  };

  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="flex w-[90%] items-center justify-between">
        <h1 className="text-black font-DM text-[1.5rem] md:text-[2.25rem] font-bold">
          Featured Movies
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-[#be123c] text-[1.125rem] ">See more</p>
          <img src={Arrow} alt="" />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div  className="flex w-[90%] py-20 flex-col gap-[5rem]">
          {Array.from({ length: Math.ceil(movies.length / 4) }).map((_, rowIndex) => (
            <div key={rowIndex} data-testid='movie-card' className="flex flex-col md:flex-row items-start gap-[5rem]">
              {movies.slice(rowIndex * 4, (rowIndex + 1) * 4).map((movie) => (
                <div
                  key={movie.id}
                  className="flex flex-col items-start gap-[.75rem]"
                >
                  <img
                  data-testid='movie-poster'
                    src={constructPosterUrl(movie.poster_path)}
                    alt={movie.title}
                  />
                  <p data-testid='movie-release-date'>{movie.release_date}</p>
                  <p data-testid='movie-title' className="text-[#111827] font-DM  font-bold">{movie.title}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
