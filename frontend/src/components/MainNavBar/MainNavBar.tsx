import { NavLink, useLocation } from "react-router";
import pointIcon from "@/assets/icons/5Point.svg";
import styles from "./MainNavBar.module.scss";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

interface MainNavBar {
  isDesktop: boolean;
}

export default function MainNavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // const isDesktop = false;

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
    case "/projects": {
      titel = "PROJECTS";
      break;
    }
  }

  return (
    <nav className={styles.navHead}>
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
    </nav>
  );
}
