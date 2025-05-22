// import { use } from "react";
// import { ContentContext } from "../context/content-context";

import cube from "../assets/StartPic.jpg";
import side from "../assets/sidePanel.svg"
// import ProjectOutput from "../components/ProjectOutput";

export default function HomePage() {
  // const { getFeaturedProjects } = use(ContentContext);

  // const featuredProjects = getFeaturedProjects();


  return (
    <>
      <div className="relative">
        <div
          className="flex absolute w-full"
          style={{ height: "calc(100vh - 3.25rem)" }}
        >
          <div className="w-13 h-full outline relative z-10 flex flex-col justify-end p-2">
            <img src={side} />
          </div>
          <div className="overflow-hidden w-full relative">
            <img
              src={cube}
              className="h-full w-full object-cover object-center"
            ></img>
            <p className="absolute right-0 bottom-0 text-white" >WORK from 2025</p>
          </div>
        </div>
        {/* <section className="fixed bottom-2">
          <ProjectOutput
            projects={featuredProjects}
            bigCards={false}
            vertical={false}
          />
        </section> */}
      </div>
    </>
  );
}
