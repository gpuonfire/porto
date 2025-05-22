import { NavLink } from "react-router";
import logo from "../assets/logo.svg";

export default function MainNavBar() {
  return (
    <nav className="top-0 w-full h-13  bg-white z-50">
      <ul className="list-none w-full h-full flex flex-row justify-between items-center p-0">
        <li className="p-3 max-w-13">
          <NavLink to={"/"}>
            <img src={logo} />
          </NavLink>
        </li>
        <li className="m-1 p-2 hover:bg-neongreen  ">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? "text-black" : "text-white";
            }}
          >
            HOME
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink className="hover:hover:text-white" to={"/projects"}>PROJECTS</NavLink>
        </li>
        <li className="p-4">
          <NavLink to={"/art"}>ART</NavLink>
        </li>

        <li className="p-4 h-full ml-auto bg-neongreen">
          <NavLink to={"/about-me"}>CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
}
