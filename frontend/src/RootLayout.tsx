import { Outlet, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import MainMenuBtn from "@/components/MainMenuButn/MainMenuBtn";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import NavMenu from "./components/NavMenuMobile/NavMenu";
import NavTitleContext from "./context/NavTitleContext";
import styles from "./RootLayout.module.scss";

export default function RootLayout() {
  const popNavMenu = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navTitle, setNavTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setNavTitle("");
  }, [pathname]);

  const closeOpenMenus = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };
  const closeMenuWithEsc = (event: any) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
      if (document.activeElement instanceof HTMLElement)
        document.activeElement.blur();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    document.addEventListener("keydown", closeMenuWithEsc);

    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
      document.removeEventListener("keydown", closeMenuWithEsc);
    };
  }, []);
  const toggleDarkMode = () => {};
  return (
    <NavTitleContext.Provider value={{ title: navTitle, setTitle: setNavTitle }}>
      <MainNavBar toggleDarkMode={toggleDarkMode} />

      <div className={styles.menuWrapper} id="menu-wrapper" ref={wrapperRef}>
        <MainMenuBtn isActive={isMenuOpen} handleClick={toggleMenu} />
        <NavMenu
          ref={popNavMenu}
          isExpanded={isMenuOpen}
          setIsExpanded={setIsMenuOpen}
        />
      </div>
      <main>
        <Outlet />
      </main>
    </NavTitleContext.Provider>
  );
}
