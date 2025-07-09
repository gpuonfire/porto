import cube from "@/assets/StartPic.jpg";
import side from "@/assets/sidePanel.svg";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <div className={styles.relative}>
        <div
          className={styles.flexAbsolute}
          style={{ height: "calc(100vh - 3.25rem)" }}
        >
          <div className={styles.sidePanel}>
            <img src={side} />
          </div>
          <div className={styles.imageContainer}>
            <img
              src={cube}
              className={styles.cubeImage}
            />
            <p className={styles.workText}>WORK from 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}