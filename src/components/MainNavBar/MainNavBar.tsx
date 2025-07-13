import { NavLink, useLocation } from "react-router";
import pointIcon from "@/assets/icons/5Point.svg";
import burgerIcon from "@/assets/icons/Burger.svg";
import styles from "./MainNavBar.module.scss";
import { useState, useRef, useEffect, use } from "react";

interface MainNavBar {
  isDesktop: boolean;
}

export default function MainNavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const isOpen = useRef(false);
  const dropMenu = useRef<HTMLUListElement>(null);
  const location = useLocation();

  const isDesktop = false;

  let titel = "";
  switch (location.pathname) {
    case "/": {
      titel = "HOME";
      break;
    }
    case "/art": {
      titel = "ART";
      break;
    }
    case "/contact": {
      titel = "CONTACT";
      break;
    }
    case "/projects": {
      titel = "PROJECTS";
      break;
    }
  }

  function handleClick() {
    setIsExpanded((prev) => !prev);
  }

  const closeOpenMenus = (e: MouseEvent | TouchEvent) => {
    if (
      isOpen.current &&
      dropMenu.current &&
      !dropMenu.current.contains(e.target as Node)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    isOpen.current = isExpanded;
  }, [isExpanded]);

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
  }, []);

  return !isDesktop ? (
    <nav ref={dropMenu}>
      <div className={styles.navHead}>
        <div className={styles.container}>
          <img src={pointIcon} aria-hidden={true} className={styles.icon} />
          <h1>{titel}</h1>
        </div>
        <button className={styles.burgerMenu} onClick={handleClick}>
          <img src={burgerIcon} aria-hidden={true} />
        </button>
      </div>
      <ul
        className={`${styles.navList} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={styles.navLink}
            onClick={() => setIsExpanded(false)}
          >
            HOME
          </NavLink>
        </li>

        <hr />
        <li className={styles.navItem}>
          <NavLink
            to="/projects"
            className={styles.navLink}
            onClick={() => setIsExpanded(false)}
          >
            PROJECTS
          </NavLink>
        </li>
        <hr />
        <li className={styles.navItem}>
          <NavLink
            to="/art"
            className={styles.navLink}
            onClick={() => setIsExpanded(false)}
          >
            ART
          </NavLink>
        </li>
        <hr />
        <li className={styles.navItem}>
          <NavLink
            to="/contact"
            className={styles.navLink}
            onClick={() => setIsExpanded(false)}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="top-0 w-full h-13  bg-white z-50">
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
          <NavLink className="hover:hover:text-white" to={"/projects"}>
            PROJECTS
          </NavLink>
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
