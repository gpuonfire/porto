import { NavLink, useLocation } from "react-router";
import pointIcon from "@/assets/icons/5Point.svg";
import burgerIcon from "@/assets/icons/Burger.svg";
import styles from "./MainNavBar.module.scss";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

interface MainNavBar {
  isDesktop: boolean;
}

export default function MainNavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const isOpen = useRef(false);
  const dropMenu = useRef<HTMLUListElement>(null);
  // const heading = useRef<HTMLUListElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

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

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
        if (document.activeElement instanceof HTMLElement)
          document.activeElement.blur();
      }
    });
  }, []);

  return !isDesktop ? (
    <nav ref={dropMenu}>
      {/* Backdrop overlay */}
      {isExpanded && (
        <div className={styles.backdrop} onClick={() => setIsExpanded(false)} />
      )}
      <div className={styles.navHead}>
        <button
          className={styles.headingContainer}
          onClick={() => navigate("/")}
          role="button"
          aria-label="Zurück zur Startseite"
          tabIndex={0}
        >
          <img src={pointIcon} aria-hidden={true} className={styles.icon} />
          <h1>{titel}</h1>
        </button>
        <button
          className={styles.burgerMenu}
          onClick={handleClick}
          aria-label="Navigation"
          role="menu"
        >
          <img src={burgerIcon} aria-hidden={true} />
        </button>
      </div>
      <ul
        className={`${styles.navList} ${isExpanded ? styles.expanded : styles.collapsed
          }`}
      >
        <li className={styles.navItem}>
          <NavLink
            role="menuitem"
            aria-label="Startseite"
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
            role="menuitem"
            aria-label="Projekte"
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
            role="menuitem"
            aria-label="Kunst"
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
            role="menuitem"
            aria-label="Kontakt"
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
    <nav>
      <p>Desktop Navigation</p>
    </nav>
  );
}
