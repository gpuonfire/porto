import { Link } from "react-router";
import { Project } from "@/@types/youAreJustMyType";
import styles from "./ProjectTeaserCard.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProjectTeaserCard({
  title = "",
  thumbnail,
  hashtags,
}: Project) {
  function titleToUrl(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special characters
      .replace(/\s+/g, "-") // replace spaces with dashes
      .replace(/-+/g, "-"); // collapse multiple dashes
  }

  return (
    <>
      {
        <article className={styles.projectCard}>
          <div className={styles.thumbnailContainer}>
            <LazyLoadImage src={thumbnail.src} alt={thumbnail.alt} />
          </div>
          <div className={styles.textBox}>
            <div className={styles.titleContainer}>
              <div className={styles.hashtags}>
                {hashtags.map((text: string, index: number) => (
                  <p className={styles.hashtag} key={index}>
                    #{text}
                  </p>
                ))}
                <h1 className={styles.title}>{title}</h1>
              </div>
            </div>
            <Link className={styles.link} to={`/projects/${titleToUrl(title)}`}>
              Lets go
            </Link>
          </div>
        </article>
      }
    </>
  );
}
