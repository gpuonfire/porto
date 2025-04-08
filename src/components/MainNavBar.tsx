import { NavLink } from "react-router";
import HomeIcon from "../assets/HomeIcon.svg";

export default function MainNavBar() {
  return (
    <nav className="top-0 w-full h-10 flex justify-center items-center bg-white z-50" >
      <ul className="list-none flex flex-row [&>li]:mx-4">
        <li>
          <NavLink to={""}>
            <img src={HomeIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"/art"}>Art</NavLink>
        </li>
        <li>
          <NavLink to={"/about-me"}>About Me</NavLink>
        </li>
      </ul>
    </nav>
  );
}
