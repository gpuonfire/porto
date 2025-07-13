import styles from "./ProjectsPage.module.scss";

export default function ProjectPage() {
  return (
    <>
      <div className={styles.sidePanel}>
        <h1 className={styles.projectsText}>PROJECTS</h1>
      </div>
      <section>
        <div>Project Cards</div>
      </section>
      <section className={styles.projectsSection}></section>
    </>
  );
}
