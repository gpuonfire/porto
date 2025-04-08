import { Link } from "react-router";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
}

export default function ProjectCard({
  id,
  title,
  description,
  thumbnail,
}: ProjectCardProps) {

  const { src, alt } = thumbnail;


  return (
    <Link
      to={`/projects/${id}`}
      
      className="relative w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <h1 className="absolute top-3 left-3 text-white text-xl font-bold z-10 drop-shadow-lg">
        {title}
      </h1>
      <p
        className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 
                transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
      >
        {description}
      </p>
    </Link>
  );
}
