import ProjectTeaserCard from "@/components/ProjectTeaserCard/ProjectTeaserCard";
import Stripes from "../../components/Stripes/Stripes";
import styles from "./HomePage.module.scss";
import { Project } from "../../@types/youAreJustMyType";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import nuclearWaste from "@/assets/SiFi_Container.jpg";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const isOpen = useRef(false);
  const dropMenu = useRef<HTMLUListElement>(null);

   const closeOpenMenus = (e: MouseEvent | TouchEvent) => {
    if (
      isOpen.current &&
      dropMenu.current &&
      !dropMenu.current.contains(e.target as Node)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    isOpen.current = isExpanded;
  }, [isExpanded]);


  useEffect(() => {
    async function loadProjects() {
      const backendHost = import.meta.env.VITE_BACKEND_API;
      console.log("Backend Host:", backendHost);
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
        <section className={styles.projectsSection}>
          {projects ? (
            projects.map((project: Project, index: number) => (
              <div key={index} className={styles.projectCardWrapper}>
                <Stripes number={16} gapSize={40} addedClass={styles.stripes} />
                <ProjectTeaserCard
                  projectId={project.id}
                  title={project.title}
                  thumbnailImg={project.thumbnailImg}
                  tags={project.tags}
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
