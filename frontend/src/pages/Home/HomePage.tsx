import ProjectTeaserCard from "@/components/ProjectTeaserCard/ProjectTeaserCard";
import Stripes from "../../components/Stripes/Stripes";
import styles from "./HomePage.module.scss";
import { Project } from "../../@types/youAreJustMyType";
import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import nuclearWaste from "@/assets/SiFi_Container.jpg";
import MainMenuBtn from "@/components/MainMenuButn/MainMenuBtn";
import NavMenu from "@/components/NavMenuMobile/NavMenu";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const popNavMenu = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeOpenMenus = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    console.log("wrapper:", wrapperRef.current, "isMenuOpen", isMenuOpen);
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };
  const closeMenuWithEsc = (event: any) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
      if (document.activeElement instanceof HTMLElement)
        document.activeElement.blur();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);

    document.addEventListener("keydown", closeMenuWithEsc);

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

    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
      document.removeEventListener("keydown", closeMenuWithEsc);
    };
  }, []);

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.menuWrapper} id="menu-wrapper" ref={wrapperRef}>
          <MainMenuBtn isActive={isMenuOpen} handleClick={toggleMenu} />
          <NavMenu
            ref={popNavMenu}
            isExpanded={isMenuOpen}
            setIsExpanded={setIsMenuOpen}
          />
        </div>
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
                <Stripes
                  number={16}
                  gapSize={40}
                  stripeWidth={42}
                  addedClass={styles.stripes}
                />
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
