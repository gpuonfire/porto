import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

import TESTDATA from "@/assets/projects-data.json";
import { Project, Layout } from "@/@types/youAreJustMyType";
import styles from "./ProjectDetailPage.module.scss";
import fivePointIcon from "@/assets/icons/5Point_small.svg";
import LayoutComp from "@/components/Layout/Layout";

export default function ProjectDetailPage() {
  const projectId = useParams().prodId ?? ""; // if ".proId" returns undefined, take empty string
  const [project, setProject] = useState<Project | null>();

  useEffect(() => {
    // make api call to fetch project data
    setProject(TESTDATA.projects[0] as Project);
  }, []);

  return (
    <>
      {project ? (
        <>
          <div className={styles.heroImgContainer}>
            <LazyLoadImage
              className={styles.heroImg}
              src={project.thumbnail.src}
              alt="Nuclear Waste Containers"
            />
          </div>
          <div className={styles.rootContainer}>
            <div className={styles.heroContainer}>
              <div className={styles.titleContainer}>
                <div aria-hidden={true}></div>
                <h1 className={styles.mainTitle}>{project.title}</h1>
              </div>
              <div className={styles.factsContainer}>
                <div className={styles.box1}>
                  {project.factsContainer.context}
                </div>
                <div className={styles.box2}>
                  {project.factsContainer.collaborators}
                </div>
                <div className={styles.box3}>
                  <LazyLoadImage
                    className={styles.heroImg}
                    src={fivePointIcon}
                    aria-hidden={true}
                  />
                  <span>{project.factsContainer.date}</span>
                </div>
                <div className={styles.box4}>
                  <div className={styles.hashtags}>
                    {project.tags.map((text: string, index: number) => (
                      <p className={styles.hash} key={index}>
                        #{text.toUpperCase()}
                      </p>
                    ))}
                  </div>
                </div>

                <div className={styles.box5}>
                  <a href={project.factsContainer.projectURL}>
                    {project.factsContainer.projectURL}
                  </a>
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
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.sectionLine}></div>

            <section>
              {project.content ? (
                project.content.map((layout: Layout, index: number) => (
                  <>
                    <LayoutComp key={index} layout={layout} />
                    <div className={styles.sectionLine}></div>
                  </>
                ))
              ) : (
                <p>Oh... looks like we ran out of content</p>
              )}
            </section>
          </div>
        </>
      ) : (
        <div>Fetching Project...</div>
      )}
    </>
  );
}
