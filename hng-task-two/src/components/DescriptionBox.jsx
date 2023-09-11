import "../index.css";

import Imdb from "../assets/images/Imdb.svg";
import Play from "../assets/images/Play.svg";
import Tom from "../assets/images/Tom.svg";

export default function DescriptionBox() {
  return (
    <section className="flex justify-center items-center h-[60vh]">
      <div className="flex justify-between ">
        <div className="flex w-[90%] flex-col items-start gap-4">
          <p className="text-white font-DM text-[3rem] font-bold leading-[1.2] tracking-wider">
            John Wick 3 : <br /> Parabellum
          </p>
          <div className="flex gap-6">
            <div className="flex tems-center gap-[.625rem]">
              <img src={Imdb} alt="" />
              <p className="text-white font-DM text-[.75rem]">86.0 / 100</p>
            </div>
            <div className="flex tems-center gap-[.625rem]">
              <img src={Tom} alt="" />
              <p className="text-white font-DM text-[.75rem]">97%</p>
            </div>{" "}
          </div>
          <div className="w-[29.5%]">
            <p className="text-white font-Dm text-[.875rem] font-medium leading-[1.3]">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
          </div>
          <button className="flex py-[.375rem] px-4 items-center gap-2 rounded-[.375rem] bg-[#be123c]">
            <img src={Play} alt="" />{" "}
            <p className="text-white font-DM text-[.875rem] font-bold uppercase">
              Watch trailer
            </p>
          </button>
        </div>
        <div className=" flex items-center justify-center">
            <ul className="flex flex-col items-center gap-[.625rem]">
                <li className="text-[#9ca3af] font-DM text-[.75rem] font-bold">1</li>
                <li className="text-[#9ca3af] font-DM text-[.75rem] font-bold">2</li>
                <li className="text-white font-DM text-[.75rem] font-bold">- 3</li>
                <li className="text-[#9ca3af] font-DM text-[.75rem] font-bold">4</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
