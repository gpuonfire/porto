import { Link } from "react-router";
import { ProjectCardProps } from "../types";



export default function ProjectCard({
  id,
  title,
  description,
  isBig,
  thumbnail,
}: ProjectCardProps) {
  const { src, alt } = thumbnail;

  const wordCount = isBig ? 340 : 120;
  const shortenText = description.slice(0, wordCount);
  const wordArray = shortenText.split(" ");

  let prevText = "";
  for (let i = 0; i < wordArray.length; i++) {
    if (i === wordArray.length - 1) {
      const prevString = prevText.trim();
      prevText = prevString;
      prevText += "...";
    } else {
      prevText += wordArray[i] + " ";
    }
  }

  return (
    <>
      {isBig ? (
        <Link
          to={`/projects/${id}`}
          className="bg-white grid grid-cols-2 m-3 relative max-w-300 h-130 rounded-lg overflow-hidden group shadow-lg transition-transform duration-300"
        >
          <img
            src={src}
            alt={alt}
            className="col-start-2 row-span-2 w-full h-full object-cover"
          />
          <div className="col-start-1 row-start-1 row-span-2 p-5">
            <h1 className=" text-black text-7xl m-3">{title}</h1>
            <p className="text-black">{prevText}</p>
          </div>
        </Link>
      ) : (
        <Link
          to={`/projects/${id}`}
          className="m-3 relative w-auto h-[200px] rounded-lg overflow-hidden group shadow-lg hover:-translate-y-1 transition-transform duration-300"
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
      )}
    </>
  );
}
