import pointIcon from "@/assets/icons/5Point.svg";
import moonIcon from "@/assets/icons/MoonIcon.svg";
import goBackIcon from "@/assets/icons/GoBackIcon.svg";
import styles from "./MainNavBar.module.scss";
import { NavLink, useLocation } from "react-router";
import { useNavTitle } from "@/context/NavTitleContext";

interface MainNavBarProps {
  toggleDarkMode: () => void;
}

export default function MainNavBar({ toggleDarkMode }: MainNavBarProps) {
  const { pathname } = useLocation();
  const { title: contextTitle } = useNavTitle();

  let title = "";
  if (contextTitle) {
    title = contextTitle;
  } else {
    switch (pathname) {
    case "/": {
      title = "PROJECTS";
      break;
    }
    case "/projects": {
      title = "PROJECTS";
      break;
    }
    case "/art": {
      title = "ART";
      break;
    }
    default: {
      title = "";
      break;
    }
    }
  }

  return (
    <nav className={styles.navHead}>
      <NavLink
        className={styles.headingContainer}
        to="/"
        role="button"
        aria-label="Go to the project page"
        tabIndex={0}
      >
        <img
          src={`${/\projects/.test(pathname) ? goBackIcon : pointIcon}`}
          aria-hidden={true}
          className={styles.icon}
        />
        <h1 className={styles.currentPageTitle}>{title}</h1>
      </NavLink>
      <div className={styles.btnContainer}>
        <NavLink
          className={`${pathname === "/" ? styles["active"] : ""} ${styles.menuBtn}`}
          to="/"
          role="button"
          aria-label="Go to the project page"
          tabIndex={0}
        >
          <p>projects</p>
        </NavLink>
        <NavLink
          className={`${pathname === "/art" ? styles["active"] : ""} ${styles.menuBtn}`}
          to="/art"
          role="button"
          aria-label="Go to the art page"
          tabIndex={0}
        >
          <p>art</p>
        </NavLink>

        <button
          className={styles.darkModeBtn}
          onClick={toggleDarkMode}
          role="button"
          aria-label="Toggle Dark Mode"
          tabIndex={0}
        >
          <img src={moonIcon} aria-hidden={true} className={styles.icon} />
        </button>
      </div>
    </nav>
  );
}
