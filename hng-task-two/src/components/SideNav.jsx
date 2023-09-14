import "../index.css";
import Logo from "../assets/images/Logo.svg";
import Home from "../assets/images/Home.svg";
import Movie from "../assets/images/Movie.svg";
import TV from "../assets/images/Tv.svg";
import Calendar from "../assets/images/Calendar.svg";
import Logout from "../assets/images/Logout.svg";


const Navlinks = [
  {
    name: "Home",
    image: Home,
  },
  {
    name: "Movies",
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

export default function SideNav() {
  return (
    <section className="bg-white  border border-black rounded-r-[2.8125rem] w-[14.125rem] h-full">
      <div className="flex flex-col gap-12 py-12 px-3 items-center">
        <div className="flex items-center gap-2 md:gap-6">
          <img src={Logo} alt="" />
          <h1 className="text-[#333] font-DM font-bold md:text-[1.5rem] leading-[1.2]">
            MovieBox
          </h1>
        </div>
        <ul className="flex flex-col items-center gap-12">
          {Navlinks.map((link) => (
            <li
              key={link.name}
              className="flex gap-4  text-[#666] text-[1.25rem] font-semibold"
            >
              <img src={link.image} alt="" /> <p>{link.name}</p>
            </li>
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
          <li
            className="flex gap-4  text-[#666] text-[1.25rem] font-semibold"
          >
            <img src={Logout} alt="" /> <p>Logout</p>
          </li>
        </div>
      </div>
    </section>
  );
}
