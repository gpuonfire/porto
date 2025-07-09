
import styles from "./HomePage.module.scss";
import cubeImg from "@/assets/CloseUp_Cube_Cycles_Render.jpg"

export default function HomePage() {
  return (
    <>
      <div className={styles.imageContainer} >
        <img src={cubeImg} alt="cube image" ></img>
      </div>
      <div>
        
      </div>
    </>
  );
}