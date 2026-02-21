import { createContext, useEffect, useState } from "react";
import { Project, Image, ContentContextType } from "../@types/youAreJustMyType";
import DATA from "../assets/projects-data.json";
import config from "../assets/config.json";

function getGridClass(aspectRatio: number) {
  if (aspectRatio === 1.0) {
    return "col-span-1 row-span-1";
  } else if (aspectRatio < 1.0) {
    return "col-span-1 row-span-2";
  } else {
    return "col-span-2 row-span-1";
  }
}

// Create Context (with default implementation)
export const ContentContext = createContext<ContentContextType>({
  projects: [],
  images: [],
  aboutMe: {
    hobbies: "",
    education: "",
    interests: "",
  },
  defaultProject: config.defaults.project,
  getFeaturedProjects: () => [],
  getProject: (proId: string) => {
    throw new Error("getProject function" + proId);
  },
});

// Create Provider
export default function ContentContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //Here are states and methods I want to perform on prject data
  const [data, setData] = useState(DATA);
  const projects: Project[] = data.projects;
  const images: Image[] = data.images;

  useEffect(() => {
    addAspectRatioClass();
  }, []);
  // useEffect: call addAspectRatioClass
  function addAspectRatioClass() {
    const imagesWithClass = images.map((img) => ({
      ...img,
      className: getGridClass(img.aspectRatio),
    }));

    let updatedData = JSON.parse(JSON.stringify(data));
    updatedData.images = imagesWithClass;
    setData(updatedData);
  }

  function featuredProjects() {
    let featuredProjects: Project[] = [];

    projects.forEach((project) => {
      if (project.featured) {
        featuredProjects.push(project);
      }
    });
    return featuredProjects;
  }

  function getProjectById(projectId: string): Project {
    const project = projects.find(
      (projectElement) => projectElement.id === projectId
    );

    if (!project) {
      throw new Error(`Project with ID "${projectId}" not found.`);
    }

    return project;
  }

  // Init Value
  const initContextVal: ContentContextType = {
    projects: projects,
    images: images,
    aboutMe: DATA.aboutMe,
    defaultProject: config.defaults.project,
    getFeaturedProjects: featuredProjects,
    getProject: getProjectById,
  };

  return (
    <ContentContext.Provider value={initContextVal}>
      {children}
    </ContentContext.Provider>
  );
}
