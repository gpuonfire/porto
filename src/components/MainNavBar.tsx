import { NavLink, useLocation } from "react-router";
import pointIcon from "@/assets/icons/5Point.svg";
import burgerIcon from "@/assets/icons/Burger.svg"
import styles from "./MainNavBar.module.scss"

export default function MainNavBar(isDesktop : boolean) {
  const location = useLocation()
  console.log(location.pathname)

  return (
    isDesktop ? 
  (
  <nav className={styles.container} >
    <img src={pointIcon} aria-hidden={true} className={styles.icon} />
    <h1>
      Home
    </h1>
    <button className={styles.burgerMenu} >
      <img src={burgerIcon} aria-hidden={true} />
    </button>
  </nav>
  )
    :
    (<nav className="top-0 w-full h-13  bg-white z-50">
      <ul className="list-none w-full h-full flex flex-row justify-between items-center p-0">
        <li className="p-3 max-w-13">
          <NavLink to={"/"}>
            <img src={pointIcon} />
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
    </nav>)
  );
}
