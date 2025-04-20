import { createContext, useState } from "react";
import { Project } from "../types";
import DATA from "../assets/projects-data.json";

type ProjectContextType = {
  projects: Project[]; // Ensure this is an array of Project
  getFeaturedProjects: () => Project[];
};

// Create Context
export const ProjectContext = createContext<ProjectContextType>({
  projects: [],
  getFeaturedProjects: () => []
});

// Create Provider
export default function ProjectContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //Here are states and methods I want to perform on prject data
  const [projects, setProjects] = useState<Project[]>(DATA.projects);

  function featuredProjects() {
    let featuredProjects: Project[] = [];

    projects.forEach((project) => {
      if (project.featured) {
        featuredProjects.push(project);
      }
    });
    return featuredProjects
  }

  // Init Value
  const initContextVal = {
    projects: [] as Array<Project>,
    getFeaturedProjects: featuredProjects
  };

  return (
    <ProjectContext.Provider value={initContextVal}>
      {children}
    </ProjectContext.Provider>
  );
}
