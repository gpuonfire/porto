import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Project, Section } from "@/@types/youAreJustMyType";
import styles from "./ProjectDetailPage.module.scss";
import fivePointIcon from "@/assets/icons/5Point_small.svg";
import LayoutComp from "@/components/Layout/Layout";

export default function ProjectDetailPage() {
  const { proId } = useParams()
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    async function loadProjects() {
      const backendHost = import.meta.env.VITE_BACKEND_API;
      console.log('Backend Host:', backendHost);
      if (!backendHost) {
        throw new Error('Backend Host is not set');
      }
      await fetch(`${backendHost}/projects/${proId}/sections`)
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          setProject(resData);
        });
    }
    if (proId) {
      loadProjects();
    }
  }, []);


  return (
    <>
      {!proId && <p className={styles.titleContainer}>Project ID is missing from the URL.</p>}
      {project ? (
        <>
          <div className={styles.heroImgContainer}>
            {project.heroImg && (
              <LazyLoadImage
                className={styles.heroImg}
                src={project.heroImg.src}
                alt={project.heroImg.alt}
              />
            )}
          </div>

          <div className={styles.rootContainer}>
            <div className={styles.heroContainer}>
              <div className={styles.titleContainer}>
                <div aria-hidden />
                <h1 className={styles.mainTitle}>{project.title}</h1>
              </div>

              <div className={styles.factsContainer}>
                <div className={styles.box1}>
                  here is another box
                </div>

                <div className={styles.box2}>
                  {project.collaborators}
                </div>

                <div className={styles.box3}>
                  <LazyLoadImage
                    className={styles.heroImg}
                    src={fivePointIcon}
                    aria-hidden
                  />
                  <span>{project.dateTime}</span>
                </div>

                <div className={styles.box4}>
                  <div className={styles.hashtags}>
                    {project.tags?.map((text: string, index: number) => (
                      <p className={styles.hash} key={index}>
                        #{text.toUpperCase()}
                      </p>
                    ))}
                  </div>
                </div>

                <div className={styles.box5}>
                  <a href={project.projectUrl}>
                    {project.projectUrl}
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

              <p className={styles.description}>{project.description}</p>
              <div className={styles.sectionLine} />

              <section>
                {project.sections?.length ? (
                  project.sections.map((section: Section, index: number) => (
                    <React.Fragment key={index}>
                      <LayoutComp {...section} />
                      <div className={styles.sectionLine} />
                    </React.Fragment>
                  ))
                ) : (
                  <p>Oh... looks like we ran out of content</p>
                )}
              </section>
            </div>
          </div>
        </>
      ) : (
        <div>Fetching Project...</div>
      )}
    </>
  );
}
