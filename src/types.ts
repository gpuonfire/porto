export interface Project {
    id: string;
    title: string;
    date: string;
    featured: boolean;
    description: string;
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

  export interface ProjectOutputProps {
    projects: Array<Project>;
    bigCards: boolean;
    vertical: boolean;
  }