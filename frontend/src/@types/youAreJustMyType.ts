export type Project = {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  thumbnailImg?: Image;
  heroImg?: Image;
  dateTime: string;
  collaborators: string;
  projectUrl: string;
  sections?: Section[];
};

export type Section = {
  layout: "1" | "2" | "3";
  sectionBits: SectionBit[];
};

export type SectionBit = {
  type: "title" | "smallTitle" | "image" | "text" | "graphic";
  content: string;
  image?: Image;
}
export type AboutMe = {
  hobbies: string;
  education: string;
  interests: string;
};

export type Image = {
  name: string;
  src: string;
  alt: string;
  id?: number;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  category?: string;
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



