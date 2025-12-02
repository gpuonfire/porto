import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ProjectDetailPage.module.scss";
import TESTDATA from "@/assets/projects-data.json";
import { Project } from "@/@types/youAreJustMyType";
import Stripes from "../../components/Stripes/Stripes";

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
            <div className={styles.titleContainer}>
              <div aria-hidden={true}></div>
              <h1 className={styles.mainTitle}>{project.title}</h1>
            </div>
            <p className={styles.description}>{project.description}</p>
          </div>

          <div className={styles.factsContainer}>
            <div className={styles.box1}>{project.factsContainer.context}</div>
            <div className={styles.box2}>
              {project.factsContainer.collaborators}
            </div>
            <div className={styles.box3}>{project.factsContainer.date}</div>
            <div className={styles.box4}>{project.tags}</div>

            <div className={styles.box5}>
              {project.factsContainer.projectURL}
            </div>

            <div className={styles.box6}>
              <div className={styles.stripeContainer}>
                <div className={styles.stripe} />
                <div className={styles.stripe} />
                <div className={styles.stripe} />
                <div className={styles.stripe} />
                <div className={styles.stripe} />
              </div>
            </div>
          </div>

          <div>
            <LazyLoadImage
              className={styles.heroImg}
              src={project.src}
              alt="Nuclear Waste Containers"
            />
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
