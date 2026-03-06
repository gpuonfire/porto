import ProjectTeaserCard from "@/components/ProjectTeaserCard/ProjectTeaserCard";
import Stripes from "../../components/Stripes/Stripes";
import styles from "./ProjectsPage.module.scss";
import TESTDATA from "@/assets/projects-data.json";
import { Project } from "../../@types/youAreJustMyType";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import nuclearWaste from "@/assets/SiFi_Container.jpg";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    async function loadProjects() {
      // const projectData = JSON.parse(TESTDATA);
      setProjects(TESTDATA.projects);
    }
    loadProjects();
  }, []);

  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.sidePanel}>
          <h1 className={styles.heroText}>PROJECTS</h1>
        </div>
        <Stripes number={16} gapSize={40} addedClass={styles.stripes} />
        <div className={styles.imgContainer}>
          <LazyLoadImage
            className={styles.heroImage}
            src={nuclearWaste}
            alt="Nuclear Waste Containers"
          />
        </div>
      </div>
      <section className={styles.projectsSection}>
        {projects ? (
          projects.map((project: Project, index: number) => (
            <ProjectTeaserCard
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              tags={project.tags}
            />
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </section>
    </>
  );
}
