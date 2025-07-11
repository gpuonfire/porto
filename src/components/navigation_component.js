import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './MainNavBar.module.scss';
import pointIcon from '../assets/point-icon.svg';
import burgerIcon from '../assets/burger-icon.svg';

export default function MainNavBar({ isDesktop }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return isDesktop ? (
    <nav className={styles.nav}>
      <div className={styles.navHead}>
        <div className={styles.container}>
          <img src={pointIcon} aria-hidden={true} className={styles.icon} />
          <h1>Home</h1>
        </div>
      </div>
      <button
        className={styles.burgerMenu}
        onClick={handleClick}
        aria-label="Toggle navigation menu"
        aria-expanded={isExpanded}
      >
        <img src={burgerIcon} aria-hidden={true} />
      </button>
      <ul className={`${styles.navList} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        <li className={styles.navItem}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/about" className={styles.navLink}>
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/contact" className={styles.navLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  ) : (
    // Mobile version
    <nav className={styles.mobileNav}>
      <div className={styles.navHead}>
        <div className={styles.container}>
          <img src={pointIcon} aria-hidden={true} className={styles.icon} />
          <h1>Home</h1>
        </div>
        <button
          className={styles.burgerMenu}
          onClick={handleClick}
          aria-label="Toggle navigation menu"
          aria-expanded={isExpanded}
        >
          <img src={burgerIcon} aria-hidden={true} />
        </button>
      </div>
      <ul className={`${styles.navList} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        <li className={styles.navItem}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/about" className={styles.navLink}>
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/contact" className={styles.navLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}