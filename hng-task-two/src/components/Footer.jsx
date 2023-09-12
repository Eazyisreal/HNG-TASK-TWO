import "../index.css";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from '../assets/images/Instagram.svg';
import Twitter from '../assets/images/Twitter.svg';
import Youtube from '../assets/images/Youtube.svg';

export default function Footer() {
  return (
    <footer className="flex flex-col px-8 pb-20 md:items-center gap-[2.25rem]">
      <ul className="flex  md:items-center gap-12">
        <li>
          <img src={Facebook} alt="" />
        </li>
        <li>
          <img src={Instagram} alt="" />
        </li>
        <li>
          <img src={Twitter} alt="" />
        </li>
        <li>
          <img src={Youtube} alt="" />
        </li>
      </ul>
      <ul className="flex flex-col md:flex-row items-start gap-12">
          <li className="text-[#111827] font-DM text-[1.125rem] font-bold">Conditions of Use</li>
          <li className="text-[#111827] font-DM text-[1.125rem] font-bold">Privacy & Policy</li>
          <li className="text-[#111827] font-DM text-[1.125rem] font-bold">Press Room</li>
      </ul>
      <p className="text-[#6b7280] font-DM text-[.85rem] md:text-[1.125rem] font-bold">© 2021 MovieBox by Adriana Eka Prayudha  </p>
    </footer>
  );
}
