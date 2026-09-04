import { NavLink, useLocation } from "react-router";
import styles from "./NavMenu.module.scss";
import { forwardRef } from "react";

interface NavMenuProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(
  ({ isExpanded, setIsExpanded }, dropMenu) => {
    const { pathname } = useLocation();

    return (
      <nav
        ref={dropMenu}
        className={`${styles.navWrapper} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        {/* Backdrop overlay */}
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <div
              className={`${pathname === "/" ? styles.activePageMarker : styles.hideMarker}`}
            ></div>
            <NavLink
              role="menuitem"
              aria-label="Projects"
              to="/"
              className={styles.navLink}
              onClick={() => setIsExpanded(false)}
            >
              PROJECTS
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <div
              className={`${pathname === "/art" ? styles.activePageMarker : styles.hideMarker}`}
            ></div>
            <NavLink
              role="menuitem"
              aria-label="Art"
              to="/art"
              className={styles.navLink}
              onClick={() => setIsExpanded(false)}
            >
              ART
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  },
);

export default NavMenu;
