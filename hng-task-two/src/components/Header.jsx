import DescriptionBox from "./DescriptionBox";
import Nav from "./Nav";
import Poster from "../assets/images/Poster.svg";

export default function Header() {
  return (
    <section
      className=" bg-cover h-[75vh]"
      style={{ backgroundImage: `url(${Poster})` }}
    >
      <Nav />
      <DescriptionBox />
    </section>
  );
}
