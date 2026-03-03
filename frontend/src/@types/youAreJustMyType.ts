export type Project = {
  id: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  thumbnail?: Image;
  heroImage?: Image;
  factsContainer?: {
    date: string;
    collaborators: string;
    projectURL: string;
  };
  content?: Layout[];
};

export type Layout = {
  layout: number;
  elements: any[];
};

export type AboutMe = {
  hobbies: string;
  education: string;
  interests: string;
};

export type Image = {
  src: string;
  alt: string;
  id?: number;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
};

export interface ProjectOutputProps {
  projects: Project[];
}

export type ContentContextType = {
  projects: Project[];
  images: Image[];
  aboutMe: AboutMe;
  defaultProject: Project;
  getFeaturedProjects: () => Project[];
  getProject: (proId: string) => Project;
};

// export type Element = {
//   title?: string;
//   smallTitle?: string;
//   image?: {
//     url: string;
//     alt: string;
//   };
//   text?: string;
//   graphic?: string;
// };



