import { Link } from "react-router";
import { Image } from "@/@types/youAreJustMyType";
import styles from "./ProjectTeaserCard.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pointSVG from "@/assets/Points.svg";

type ProjectTeaserCardProps = {
  title: string
  thumbnail?: Image
  tags?: string[]
}

export default function ProjectTeaserCard({
  title,
  thumbnail,
  tags,
}: ProjectTeaserCardProps) {
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
          {
            thumbnail ?
              <div className={styles.thumbnailContainer}>
                <LazyLoadImage src={thumbnail.src} alt={thumbnail.alt} />
              </div>
              : null
          }
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
                {
                  tags ?
                    <div className={styles.hashtags}>
                      {tags.map((text: string, index: number) => (
                        <p className={styles.hash} key={index}>
                          #{text.toUpperCase()}
                        </p>
                      ))}
                    </div>
                    : null
                }
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
