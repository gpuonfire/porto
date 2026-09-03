import { useState, useEffect } from "react";
import { Image } from "@/@types/youAreJustMyType";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Gallery.module.scss";

export default function GalleryPage() {
  const [images, setImages] = useState<Image[] | null>(null);

  function sortImagesToCategories() {}

  useEffect(() => {
    async function loadImages() {
      const backendHost = import.meta.env.VITE_BACKEND_API;
      console.log("Backend Host:", backendHost);
      if (!backendHost) {
        throw new Error("Backend Host is not set");
      }
      await fetch(`${backendHost}/gallery`)
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          console.log("Response", resData);
          //sortImagesToCategories(resData);
          setImages(resData);
        });
    }
    loadImages();
  }, []);

  return (
    <>
      <h1 className={styles.heading}>Gallery Page</h1>
      <section>
        <h2 className={styles.subheading}>Sketches</h2>
        <div className={styles.sectionWrapper}>
          <div className={styles.grid}>
            {images
              ? images.map((image) => (
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
                ))
              : null}
          </div>
        </div>
      </section>
    </>
  );
}
