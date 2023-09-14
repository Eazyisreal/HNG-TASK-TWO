// Movie.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useLocation } from "react-router-dom";
import "../index.css";
import Logo from "../assets/images/Logo.svg";
import Home from "../assets/images/Home.svg";
import Movie from "../assets/images/Movie.svg";
import TV from "../assets/images/Tv.svg";
import Calendar from "../assets/images/Calendar.svg";
import Logout from "../assets/images/Logout.svg";
import Trailer from "../assets/images/Trailer.svg";

const Navlinks = [
  {
    name: "Home",
    path: "/",
    image: Home,
  },
  {
    name: "Movies",
    path: "/#movies",
    image: Movie,
  },
  {
    name: "TV Series",
    image: TV,
  },
  {
    name: "Upcoming",
    image: Calendar,
  },
];

export default function Movies() {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Access the movie ID from the URL
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });

        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const location = useLocation();
  const handleScrollToMovies = () => {
    const moviesSection = document.getElementById("movies");
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (location.hash === "#movies") {
      handleScrollToMovies();
    }
  }, [location]);

  const constructPosterUrl = (relativePath) => {
    if (relativePath) {
      const baseUrl = "https://image.tmdb.org/t/p/w500";

      return `${baseUrl}${relativePath}`;
    }
    return "URL_TO_PLACEHOLDER_IMAGE";
  };

  return (
    <section className="grid-container">
      <div className="aside hidden lg:block">
        <section className="bg-white  border border-black rounded-r-[2.8125rem] w-[14.125rem] h-full">
          <div className="flex flex-col gap-12 py-12 px-3 items-center">
            <Link to="/">
              <div className="flex items-center gap-2 md:gap-6">
                <img src={Logo} alt="" />
                <h1 className="text-[#333] font-DM font-bold md:text-[1.5rem] leading-[1.2]">
                  MovieBox
                </h1>
              </div>
            </Link>
            <ul className="flex flex-col items-center gap-12">
              {Navlinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleScrollToMovies}
                >
                  <li className="flex gap-4  text-[#666] text-[1.25rem] font-semibold">
                    <img src={link.image} alt="" /> <p>{link.name}</p>
                  </li>
                </Link>
              ))}
            </ul>

            <div className="flex flex-col gap-3 w-[10.625rem] py-10 px-4 rounded-[1.25rem] bg-[#f8e7eb] bg-opacity-40 border border-[#be123c] border-opacity-70 ">
              <p className="text-[#666] font-poppins text-[.9375rem] font-semibold">
                Play movie quizes and earn free tickets
              </p>
              <p className="text-[#666] font-poppins text-[.75rem] font-medium">
                50k people are playing now
              </p>
              <button className="w-[7rem] h-[1.875rem] px-2  items-center rounded-[1.875rem] bg-[#be123c] bg-opacity-30">
                Start playing
              </button>
            </div>

            <div>
              <li className="flex gap-4  text-[#666] text-[1.25rem] font-semibold">
                <img src={Logout} alt="" /> <p>Logout</p> text-base
md:              </li>
            </div>
          </div>
        </section>
      </div>
      <div className="main">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="md:p-12 p-4 flex flex-col gap-8 rounded-[.625rem]">
            <div
              className="flex rounded-[1.25rem] bg-cover bg-no-repeat h-[28.06rem]"
              style={{
                backgroundImage: `url(${constructPosterUrl(
                  movieDetails.backdrop_path
                )})`,
              }}
            >
              <img
                className="w-1/4 absolute lg:top-[15%] lg:left-[50%] md:top-[20%] md:left-[40%] top-[30%] left-[40%]"
                src={Trailer}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <p
                  data-testid="movie-title"
                  className="font-poppins text-[#404040] text-base md:text-[1.4375rem] font-medium"
                >
                  {movieDetails.title}
                </p>
                <p
                  data-testid="movie-release-date"
                  className="font-poppins text-[#404040] text-base md:text-[1.4375rem] font-medium"
                >
                  {Date.parse(movieDetails.release_date)}{" "}
                  {/* Converts to UTC milliseconds  */}{" "}
                </p>
                <p
                  data-testid="movie-runtime"
                  className="font-poppins text-[#404040] text-base md:text-[1.4375rem] font-medium"
                >
                  {movieDetails.runtime} minutes
                </p>
              </div>
            </div>

            <div className="flex">
              <p
                data-testid="movie-overview"
                className="text-[#333] font-poppins md:text-[1.25rem] "
              >
                {movieDetails.overview}
              </p>
            </div>

            <div className="flex flex-col"></div>
          </div>
        )}
      </div>
    </section>
  );
}
