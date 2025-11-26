import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ProjectDetailPage.module.scss";
import TESTDATA from "@/assets/projects-data.json";
import { Project } from "@/@types/youAreJustMyType";

export default function ProjectDetailPage() {
  const projectId = useParams().prodId ?? ""; // if ".proId" returns undefined, take empty string
  const [project, setProject] = useState<Project | null>();

  useEffect(() => {
    // make api call to fetch project data
    setProject(TESTDATA.projects[0] as Project);
  }, []);

  /* 
  Types of project sections:
  - thought = image + cursiv text
  - section = image + text
  - introduction = image + text with rune
  - more images...
  */

  return (
    <>
      {project ? (
        <div>
          <div className={styles.heroContainer}>
            <LazyLoadImage
              className={styles.heroImg}
              src={project.thumbnail.src}
              alt="Nuclear Waste Containers"
            />
            <div>
              <div className={styles.stripe} aria-hidden={true}></div>
              <h1 className={styles.mainTitle}>{project.title}</h1>
            </div>
            <p>{project.description}</p>
            <div className={styles.factsContainer}>
              <div>{project.factsContainer.date}</div>
              <div>{project.factsContainer.collaborators}</div>
              <div>{project.factsContainer.projectURL}</div>
              <div>{project.tags}</div>
              Facts container: - dates - links - collaborators - tech stack -
              url to page
            </div>
          </div>
          <div>
            <img></img>
            <p>
              Small cite about what I was thingink when doing this - like a
              teaser
            </p>
          </div>
          <div>Intro</div>
          <div>Procedure</div>
          <div>Result</div>
          <div>Jump back to top buton</div>
        </div>
      ) : (
        <div>Fetching Project...</div>
      )}
    </>
  );
}
