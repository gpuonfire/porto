import ProjectTeaserCard from "@/components/ProjectTeaserCard/ProjectTeaserCard";
import Stripes from "../../components/Stripes/Stripes";
import styles from "./HomePage.module.scss";
import { Project } from "../../@types/youAreJustMyType";
import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import nuclearWaste from "@/assets/SiFi_Container.jpg";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    async function loadProjects() {
      const backendHost = import.meta.env.VITE_BACKEND_API;
      if (!backendHost) {
        throw new Error("Backend Host is not set");
      }
      await fetch(`${backendHost}/projects`)
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
      <div className={styles.mainContent}>
        <div className={styles.heroSection}>
          <div className={styles.sidePanel}>
            <h1 className={styles.heroText}>PROJECTS</h1>
          </div>
          <div className={styles.imgContainer}>
            <LazyLoadImage
              className={styles.heroImage}
              src={nuclearWaste}
              alt="Nuclear Waste Containers"
            />
          </div>
        </div>
        <Stripes
          number={16}
          gapSize={40}
          stripeWidth={42}
          addedClass={styles.stripes}
        />
        <section className={styles.projectsSection}>
          {projects ? (
            projects.map((project: Project, index: number) => (
              <div key={index} className={styles.projectCardWrapper}>
                <ProjectTeaserCard
                  projectId={project.id}
                  title={project.title}
                  thumbnailImg={project.thumbnailImg}
                  tags={project.tags}
                />
                <Stripes
                  number={16}
                  gapSize={40}
                  stripeWidth={42}
                  addedClass={styles.stripes}
                />
              </div>
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </section>
      </div>
    </>
  );
}
