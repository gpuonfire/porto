import styles from "./MainMenuBtn.module.scss";
import burgerIcon from "@/assets/BurgerIcon.svg";
import crossIcon from "@/assets/CrossIcon.svg";
import { useState } from "react";
interface MainMenuBtnProps {
  handleClick: () => void;
  isActive: boolean;
}

export default function MainMenuBtn({
  handleClick,
  isActive,
}: MainMenuBtnProps) {

  return (
    <button
      className={`${styles["burgerMenu"]} ${isActive ? styles["isActive"] : styles["isNotActive"]}`}
      onClick={handleClick}
      aria-label="Navigation"
      role="menu"
    >
      <img src={`${isActive ? crossIcon : burgerIcon} `} aria-hidden={true} />
    </button>
  );
}
