import { use } from "react";
import titlePic from "@/assets/TitlePic.jpg";
import { ContentContext } from "@/context/content-context";
import ProjectOutput from "@/components/ProjectOutput";
import styles from "./ProjectsPage.module.scss";

export default function ProjectPage() {
  const { projects } = use(ContentContext);

  return (
    <>
      <section
        className={styles.heroSection}
        style={{ height: "calc(100vh - 3.25rem)" }}>
        <div className={styles.sidePanel}>
          <p className={styles.projectsText}>
            PROJECTS
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={titlePic}
            className={styles.heroImage}
          />
        </div>
      </section>
      <section className={styles.projectsSection}>
        <ProjectOutput projects={projects} />
      </section>
    </>
  );
}