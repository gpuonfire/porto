import { use } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContentContext } from "@/context/content-context";
import styles from "./Gallery.module.scss";

export default function GalleryPage() {
  const { images } = use(ContentContext);

  return (
    <>
      <h1 className={styles.heading}>Gallery Page</h1>
      <section>
        <h2 className={styles.subheading}>Sketches</h2>
        <div className={styles.sectionWrapper}>
          <div className={styles.grid}>
            {images.map((image) => (
              <div
                key={image.id}
                className={`${image.className} ${styles.imageWrapper}`}
              >
                <LazyLoadImage
                  height={image.height}
                  width={image.width}
                  src={image.src}
                  alt={image.alt}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
