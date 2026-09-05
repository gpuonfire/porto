import { useState, useEffect, ReactElement } from "react";
import { Image } from "@/@types/youAreJustMyType";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import GalleryNavBar from "@/components/GalleryNavBar/GalleryNavBar";
import styles from "./Gallery.module.scss";
import glyph2 from "@/assets/Glyph2.svg";
import glyph3 from "@/assets/Glyph3.svg";
import verticalLine from "@/assets/VerticalLine.svg";
import penIcon from "@/assets/icons/PenIcon.svg";
import cubeIcon from "@/assets/icons/CubeIcon.svg";
import pointerIcon from "@/assets/icons/GraphicIcon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function GalleryPage() {
  const [images, setImages] = useState<Image[] | null>(null);
  let drawings: Image[] = [];
  let renders: Image[] = [];
  let graphics: Image[] = [];
  let thumbnails: Image[] = [];

  function sortImagesToCategories(images: Image[]) {
    images.forEach((img) => {
      switch (img.category) {
        case "drawing":
          drawings.push(img);
          break;
        case "render":
          renders.push(img);
          break;
        case "graphic":
          graphics.push(img);
          break;
        case "thumbnail":
          thumbnails.push(img);
          break;
        default:
          drawings.push(img);
          break;
      }
    });
    console.log("Images sorted");
  }

  useEffect(() => {
    async function loadImages() {
      const backendHost = import.meta.env.VITE_BACKEND_API;
      if (!backendHost) {
        throw new Error("Backend Host is not set");
      }
      await fetch(`${backendHost}/gallery`)
        .then((response) => {
          return response.json();
        })
        .then((resData: Image[]) => {
          console.log("Response", resData);
          setImages(resData);
        });
    }
    loadImages();
  }, []);

  const getStrechedTitle = (title: string): ReactElement => {
    const titleArray = title.split("");
    return (
      <div className={styles.stretchTitleContainer}>
        {titleArray.map((letter) => (
          <span>{letter}</span>
        ))}
      </div>
    );
  };

  const getThumbnailByName = (name: string, imgColor: string): ReactElement => {
    const img = thumbnails.find((img) => img.id === name);
    if (img)
      return (
        <div
          className={styles.maskedThumbnail}
          style={{
            maskImage: `url(${img.src})`,
            WebkitMaskImage: `url(${img.src})`,
            backgroundColor: `${imgColor}`,
          }}
        />
      );
    else return <p>Thumbnail {name} not found</p>;
  };

  if (images && images?.length > 0) {
    sortImagesToCategories(images);
  }

  return (
    <>
      <div>
        {images ? (
          <>
            <section id="renders" className={styles.section}>
              <div className={styles.thumbnailBox}>
                <div
                  className={`${styles.thumbnailContainer}`}
                  style={{ backgroundColor: "#CE99C5" }}
                >
                  <span className={styles.thumbnailTitleBig}>RENDERS</span>
                  <img src={glyph2} className={styles.glyph2} />
                  {getThumbnailByName("face-dithered", "#110B24")}
                </div>
                {getStrechedTitle("RENDERS")}
              </div>
              <ImageGrid images={renders} />
            </section>
            <section id="drawings" className={styles.section}>
              <div className={styles.thumbnailBox}>
                <div
                  className={`${styles.thumbnailContainer}`}
                  style={{ backgroundColor: "#69FF00" }}
                >
                  <span className={styles.thumbnailTitleBig}>SKETCHES</span>
                  <img src={verticalLine} className={styles.verticalLine} />
                  {getThumbnailByName("girl-dithered", "#19006A")}
                </div>
                {getStrechedTitle("SKETCHES")}
              </div>
              <ImageGrid images={drawings} />
            </section>
            <section id="graphics" className={styles.section}>
              <div className={styles.thumbnailBox}>
                <div
                  className={`${styles.thumbnailContainer}`}
                  style={{ backgroundColor: "#FFC852" }}
                >
                  <span className={styles.thumbnailTitleBig}>GRAPHICS</span>
                  <img src={glyph3} className={styles.glyph3} />
                  {getThumbnailByName("pikatchu-dithered", "#3B0290")}
                </div>
                {getStrechedTitle("GRAPHICS")}
              </div>
              <ImageGrid images={graphics} />
            </section>
          </>
        ) : (
          <div>We are out of images for today... ( ._.)</div>
        )}
      </div>
      {images && <GalleryNavBar />}
    </>
  );
}
