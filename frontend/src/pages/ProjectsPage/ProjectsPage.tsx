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
      const backendHost = import.meta.env.VITE_BACKEND_HOST;
      if (!backendHost) {
        throw new Error('Backend Host is not set');
      }
      await fetch(`${backendHost}/projects/`)
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          setProjects(resData);
        });
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
              title={project.title}
              thumbnail={project.thumbnail}
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
