import burgerIcon from "@/assets/icons/Burger.svg";
import styles from "./ProjectSection.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ProjectSection = {
  template: number;
  title: string;
  image?: {
    url: string;
    alt: string;
  };
  text: string;
  graphic?: number;
};

export default function ProjectSection({ s }: { s: ProjectSection }) {
  console.log(styles);

  const imageNode =
    s.image && s.image.url ? (
      <div className={styles.imgContainer}>
        <LazyLoadImage src={s.image.url} alt={s.image.alt ?? ""} />
      </div>
    ) : null;

  const iconSelector = () => {};

  // graphic to asset parse:

  switch (s.template) {
    case 1:
      // image above text
      return (
        <article className={`${styles.ar} ${styles.temp1}`}>
          {imageNode}
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </article>
      );

    case 2:
      // text above image
      return (
        <article>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
          {imageNode}
        </article>
      );

    case 3:
      // title, image, text
      return (
        <article>
          <h3>{s.title}</h3>
          {imageNode}
          <p>{s.text}</p>
        </article>
      );

    case 4:
      // side-by-side: image (if present) + text block
      return (
        <article>
          <p>T4</p>
        </article>
      );

    default:
      // fallback to template 1
      return (
        <article>
          <h2>DEFAULT</h2>
          {imageNode}
          <p>{s.text}</p>
        </article>
      );
  }
}
