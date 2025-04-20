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

  export interface ProjectCardProps extends Project {
    isBig: boolean;
  }

  export type Image = {
    id: number;
    src: string;
    alt: string;
  };

  export interface ProjectOutputProps {
    projects: Project[];
    bigCards: boolean;
    vertical: boolean;
  }

  