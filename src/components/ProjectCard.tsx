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

  const shortenText = description.slice(0,120)
  const wordArray = shortenText.split(" ");

  let prevText = "";
  for (let i = 0; i < wordArray.length; i++) {
    if(i === wordArray.length - 1) {
      const prevString = prevText.trim()
      prevText = prevString
      prevText += "..."
    } else {
      prevText += wordArray[i] + " "
    }
  }
  console.log(prevText);


  return (
    <Link
      to={`/projects/${id}`}
      className="relative w-[300px] h-[200px] rounded-lg overflow-hidden group shadow-lg hover:-translate-y-1 transition-transform duration-300"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:blur-xs transition-blur duration-300"
      />
      <h1 className="absolute top-3 left-3 text-white text-xl font-bold z-10">
        {title}
      </h1>
      <p
        className="absolute bottom-0 left-0 right-0 text-white p-3 
                transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
      >
        {prevText}
      </p>
    </Link>
  );
}
