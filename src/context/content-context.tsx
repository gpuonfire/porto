import { createContext, useState } from "react";
import { Project, Image } from "../types";
import DATA from "../assets/projects-data.json";
import config from "../assets/config.json";

type ContentContextType = {
  projects: Project[];
  images: Image[];
  aboutMe: null;
  defaultProject: Project;
  getFeaturedProjects: () => Project[];
  getProject: (proId: string) => Project;
};

// Create Context (with default implementation)
export const ContentContext = createContext<ContentContextType>({
  projects: [],
  images: [],
  aboutMe: null,
  defaultProject: config.defaults.project,
  getFeaturedProjects: () => [],
  getProject: (proId: string) => {
    throw new Error("getProject function must be implemented");
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
  const aboutMe = data.aboutMe;

  // useEffect: call addAspectRatioClass
function addAspectRatioClass() {
    // call setData to appy changes
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
  const initContextVal = {
    projects: DATA.projects,
    images: DATA.images, // alter this! we need to take ration in account!
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
