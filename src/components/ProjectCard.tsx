import { Link } from "react-router";
import { Project } from "../@types/youAreJustMyType";

export default function ProjectCard({
  id,
  title,
  description,
  thumbnail,
  hashtags
}: Project) {
  const { src, alt } = thumbnail;

  const wordCount = 340;
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
      {
        // <article className="bg-gray-100 grid grid-cols-3 relative w-full max-w-7xl h-130 overflow-hidden group shadow-lg transition-transform duration-300">
        //   <img
        //     src={src}
        //     alt={alt}
        //     className="col-start-3 row-span-2 col-span-1 w-full h-full object-cover"
        //   />
        //   <div className="col-start-1 col-span-2 row-start-1 p-1">
        //     <h1 className=" text-black text-7xl font-lexend max-w-3xl" >{title}</h1>
        //     <div className="flex mt-5" >
        //       {hashtags.map((hash,index) => (<p className=" text-sm outline outline-light-grey p-1 m-1 text-light-grey" key={index} >#{hash}</p>))}
        //     </div>
        //   </div>
        //   <div className="col-start-1 col-span-2 row-start-2 relative">
        //     <Link className="absolute bottom-0 right-0 bg-black text-white text-2xl m-3 p-2" to={`/projects/${id}`}>Lets go</Link>
        //   </div>
        // </article>
        <article className="flex flex-col items-center bg-gray-100 overflow-hidden max-w-screen-xl h-130">
          <div className="grow-2 overflow-hidden w-full h-full relative">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-center"
            ></img>
          </div>
          <div className="flex items-end justify-between w-full p-2">
            <Link className=" bg-black text-white text-2xl p-2" to={`/projects/${id}`}>Lets go</Link>
            <div className="relative" >
              <h1 className="text-black uppercase text-right text-7xl font-lexend" >{title}</h1>
              <div className="flex justify-end mt-5" >
                {hashtags.map((hash,index) => (<p className=" text-sm outline outline-light-grey p-1 m-1 text-light-grey" key={index} >#{hash}</p>))}
              </div>
            </div>
          </div>
        </article>
      }
    </>
  );
}
