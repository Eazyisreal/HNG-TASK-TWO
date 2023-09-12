import "../index.css";

import Logo from "../assets/images/Logo.svg";
import Menu from "../assets/images/Menu.svg";
import Search from "./Search";

export default function Nav() {
  return (
    <section className="flex justify-center items-center h-[5rem]">
      <div className="flex w-[90%] justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <img src={Logo} alt="" />
          <h1 className="text-white font-DM font-bold md:text-[1.5rem] leading-[1.2]">
            MovieBox
          </h1>
        </div>
        <Search />
        <div className="flex items-center gap-[1.6875rem]">
          <h2 className="hidden md:block text-white font-DM text-base font-bold">
            Sign in
          </h2>
          <img src={Menu} alt="" />
        </div>
      </div>
    </section>
  );
}
