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
  content?: ContentBit[];
};

export type ContentBit = {
  position: number;
  type: "title" | "image" | "text" | "graphic";
  styling: string;
  text: string;
  image?: Image;
};

export type AboutMe = {
  hobbies: string;
  education: string;
  interests: string;
};

export type Image = {
  id: string;
  src: string;
  alt: string;
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
