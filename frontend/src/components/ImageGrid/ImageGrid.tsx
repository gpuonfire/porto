import { Image } from "@/@types/youAreJustMyType";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ImageGrid.module.scss";

interface ImageGridProps {
  images: Image[];
}

export default function ImageGrid({images}:ImageGridProps) {
  return (
    <div className={styles.grid}>
      {images.map((image) => (
        <div
          key={image.name}
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
  );
}
