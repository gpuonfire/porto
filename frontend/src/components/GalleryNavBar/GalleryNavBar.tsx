import { Fragment, useRef, useState } from "react";
import cubeIcon from "@/assets/icons/CubeIcon.svg";
import penIcon from "@/assets/icons/PenIcon.svg";
import pointerIcon from "@/assets/icons/GraphicIcon.svg";
import styles from "./GalleryNavBar.module.scss";

type Section = {
  id: string;
  label: string;
  icon: string;
};

// These ids must match the `id` attributes on the <section> elements in GalleryPage.
const SECTIONS: Section[] = [
  { id: "renders", label: "Renders", icon: cubeIcon },
  { id: "drawings", label: "Drawings", icon: penIcon },
  { id: "graphics", label: "Graphics", icon: pointerIcon },
];

export default function GalleryNavBar() {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={styles.navBar} aria-label="Gallery sections">
      {SECTIONS.map((section, index) => (
        <Fragment key={section.id}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => handleClick(section.id)}
            aria-label={`Go to ${section.label}`}
          >
            <img src={section.icon} alt="" className={styles.navIcon} />
          </button>
          {index < SECTIONS.length - 1 && (
            <span className={styles.divider} aria-hidden="true" />
          )}
        </Fragment>
      ))}
    </nav>
  );
}
