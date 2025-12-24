import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./HomePage.module.scss";
import cubeImg from "@/assets/CloseUp_Cube_Cycles_Render.jpg";

export default function HomePage() {
  return (
    <>
      <div className={styles.mainLayout}>
        <div className={styles.imageContainer}>
          <LazyLoadImage src={cubeImg} alt="cube image" />
        </div>
        <footer>
          <p>안녕 |||| U |||| READ THIS |||| YO</p>
        </footer>
      </div>
    </>
  );
}
