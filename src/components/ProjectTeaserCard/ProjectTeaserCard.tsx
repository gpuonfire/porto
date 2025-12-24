import { Link } from "react-router";
import { Project } from "@/@types/youAreJustMyType";
import styles from "./ProjectTeaserCard.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pointSVG from "@/assets/Points.svg";

export default function ProjectTeaserCard({
  title,
  thumbnail,
  tags,
}: Project) {
  function titleToUrl(title: string): string {
    if (!title) {
      return "no-title";
    }
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
          <div className={styles.bottomSection}>
            <div className={styles.titleContainer}>
              <div className={styles.svgContainer}>
                <LazyLoadImage
                  src={pointSVG}
                  aria-hidden={true}
                  width={76}
                  height={110}
                />
              </div>
              <div className={styles.textBox}>
                <div className={styles.hashtags}>
                  {tags.map((text: string, index: number) => (
                    <p className={styles.hash} key={index}>
                      #{text.toUpperCase()}
                    </p>
                  ))}
                </div>
                <h1>{title}</h1>
              </div>
            </div>
            <Link className={styles.link} to={`/projects/${titleToUrl(title)}`}>
              CHECK OUT
            </Link>
          </div>
        </article>
      }
    </>
  );
}
