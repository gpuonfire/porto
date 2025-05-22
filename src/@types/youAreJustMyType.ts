export interface Project {
  id: string;
  title: string;
  date: string;
  featured: boolean;
  description: string;
  hashtags: string[];
  thumbnail: {
    src: string;
    alt: string;
  };
  videoUrl: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}

export type AboutMe = {
  hobbies: string;
  education: string;
  interests: string;
}

export type Image = {
  id: number;
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
  aspectRatio: number;
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
