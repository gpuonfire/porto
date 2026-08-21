import burgerIcon from "@/assets/icons/Burger.svg";
import styles from "./MainMenuBtn.module.scss";
import { useState } from "react";

export default function MainMenuBtn(onClick: () => {}) {
//  const [is, setIsExpanded] = useState(false);

  return (

    <button
      className={styles.burgerMenu}
      onClick={onClick}
      aria-label="Navigation"
      role="menu"
    >
      <img src={burgerIcon} aria-hidden={true} />
    </button>
  );
}
