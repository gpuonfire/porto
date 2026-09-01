import { NavLink, useLocation } from "react-router";
import pointIcon from "@/assets/icons/5Point.svg";
import styles from "./NavMenu.module.scss";
import { useRef, useEffect, useState, forwardRef } from "react";
import { useNavigate } from "react-router";
import path from "path";

interface NavMenuProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(
  ({ isExpanded, setIsExpanded }, dropMenu) => {
    const { pathname } = useLocation();
    console.log("location", pathname);

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
