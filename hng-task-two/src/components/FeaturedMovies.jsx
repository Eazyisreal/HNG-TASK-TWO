import "../index.css";

import { useEffect, useState } from "react";

import Arrow from '../assets/images/arrow_right.svg';
import { fetchTopRatedMovies } from "../services/api";

export default function FeaturedMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopRatedMovies();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="flex w-[90%] items-center justify-between">
        <h1 className="text-black font-DM text-[2.25rem] font-bold">
          Featured Movie
        </h1>
        <div className="flex items-center gap-2">
            <p className="text-[#be123c] text-[1.125rem] ">See more</p>
            <img src={Arrow} alt="" />
        </div>
      </div>
        
        {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex items-start gap-[5rem]"></div>
      )}
    </section>
  );
}
