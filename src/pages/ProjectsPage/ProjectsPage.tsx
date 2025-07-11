import styles from "./ProjectsPage.module.scss";

export default function ProjectPage() {

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
      </section>
    </>
  );
}