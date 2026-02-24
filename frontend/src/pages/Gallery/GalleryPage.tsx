import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Gallery.module.scss";
import TESTDATA from "@/assets/projects-data.json";

export default function GalleryPage() {
  const images = TESTDATA.images

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
