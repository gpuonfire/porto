import ProjectTeaserCard from "@/components/ProjectTeaserCard/ProjectTeaserCard";
import Stripes from "../../components/Stripes/Stripes";
import styles from "./HomePage.module.scss";
import { Project } from "../../@types/youAreJustMyType";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [heroImg, setHeroImg] = useState<Image | null>();

  useEffect(() => {
    const backendHost = import.meta.env.VITE_BACKEND_API;
    if (!backendHost) {
      throw new Error("Backend Host is not set");
    }
    async function loadHeroImg() {
      await fetch(`${backendHost}/images/portal-cube`)
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          setHeroImg(resData);
        });
    }
    async function loadProjects() {
      await fetch(`${backendHost}/projects`)
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          setProjects(resData);
        });
    }
    loadHeroImg();
    loadProjects();
  }, []);

  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.imgContainer}>
          <div className={styles.sidePanel}>
            <p>Take a close look. The are really interessting</p>
            <h1 className={styles.heroText}>PROJECTS</h1>
          </div>
          {heroImg ? (
            <LazyLoadImage
              className={styles.heroImage}
              src={heroImg.src}
              alt="Nuclear Waste Containers"
            />
          ) : null}
        </div>
      </div>
      <section className={styles.projectsSection}>
        {projects ? (
          projects.map((project: Project, index: number) => (
            <ProjectTeaserCard
              key={index}
              projectId={project.id}
              title={project.title}
              thumbnailImg={project.thumbnailImg}
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
