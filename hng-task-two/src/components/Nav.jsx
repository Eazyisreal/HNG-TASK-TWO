import "../index.css";

import Logo from "../assets/images/Logo.svg";
import Menu from '../assets/images/Menu.svg';
import Search from "../assets/images/Search.svg";

export default function Nav() {
  return (
    <section className="flex justify-center items-center h-[5rem]">
      <div className="flex w-[90%] justify-between">
        <div className="flex items-center gap-6">
          <img src={Logo} alt="" />
          <h1 className="text-white font-DM font-bold text-[1.5rem] leading-[1.2]">
            MovieBox
          </h1>
        </div>
        <div className="flex w-[32.8125rem] py-[.375rem] px-[.625rem] justify-between items-center rounded-[.375rem] border-2 border-[#D1D5DB]">
            <h3 className="text-white font-DM text-base">What do you want to watch?</h3>
            <img src={Search} alt="" />
        </div>
        <div className="flex items-center gap-[1.6875rem]">
            <h2 className="text-white font-DM text-base font-bold">Sign in</h2>
            <img src={Menu} alt="" />
        </div>
      </div>
    </section>
  );
}
