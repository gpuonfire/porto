import { use } from "react";
import titlePic from "../assets/TitlePic.jpg";
import { ContentContext } from "../context/content-context";
import ProjectOutput from "../components/ProjectOutput";

export default function ProjectPage() {
  const { projects } = use(ContentContext);
  // translate-x-0.5 rotate-270
  return (
    <>
      <section
        className="flex w-full"
        style={{ height: "calc(100vh - 3.25rem)" }}>
        <div className="w-30 h-full outline relative z-10 flex flex-col justify-end p-1">
          <p className="font-lexend text-7xl text-black absolute self-start origin-top-left rotate-270">
            PROJECTS
          </p>
        </div>
        <div className="overflow-hidden w-full relative">
          <img
            src={titlePic}
            className="h-full w-full object-cover object-center"
          ></img>
        </div>
      </section>
      <section className="flex flex-col items-center" >
        <ProjectOutput projects={projects} />
      </section>
    </>
  );
}
