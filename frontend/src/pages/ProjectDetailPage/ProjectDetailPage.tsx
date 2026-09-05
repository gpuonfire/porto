import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { ContentBit, Project } from "@/@types/youAreJustMyType";
import styles from "./ProjectDetailPage.module.scss";
import fivePointIcon from "@/assets/icons/5Point_small.svg";
import LayoutComp from "@/components/Layout/Layout";
import { useNavTitle } from "@/context/NavTitleContext";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export default function ProjectDetailPage() {
  const { proId } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const { setTitle } = useNavTitle();

  useEffect(() => {
    async function loadProjects() {
      const backendHost = import.meta.env.VITE_BACKEND_API;
      if (!backendHost) {
        throw new Error("Backend Host is not set");
      }
      await fetch(`${backendHost}/projects/${proId}`)
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          resData.dateTime = formatDate(resData.dateTime);
          setProject(resData);
          setTitle(resData.title);
          console.log("Page Conent", resData);
        });
    }
    if (proId) {
      loadProjects();
    }

    return () => {
      setTitle("");
    };
  }, []);

  return (
    <>
      {!proId && (
        <p className={styles.titleContainer}>
          Project ID is missing from the URL.
        </p>
      )}
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
                <div className={styles.titleWrapper}>
                  <div className={styles.titleStroke} aria-hidden />
                  <h1 className={styles.mainTitle}>{project.title}</h1>
                </div>
                <div className={styles.factsContainer}>
                  <div className={styles.box1}>here is another box</div>
                  <div className={styles.collaborators}>
                    {project.collaborators}
                  </div>
                  <div className={styles.projectDate}>
                    <LazyLoadImage
                      className={styles.heroImg}
                      src={fivePointIcon}
                      aria-hidden
                    />
                    <span>{project.dateTime}</span>
                  </div>
                  <div className={styles.hashtagBox}>
                    <div className={styles.hashtags}>
                      {project.tags?.map((text: string, index: number) => (
                        <p className={styles.hash} key={index}>
                          #{text.toUpperCase()}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className={styles.projectUrl}>
                    <a href={project.projectUrl}>{project.projectUrl}</a>
                  </div>

                  <div className={styles.stripeBox}>
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
              <div className={styles.sectionLine} />

              <section>
                {project.content && project.content?.length > 0 ? (
                  <LayoutComp content={project.content} />
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
