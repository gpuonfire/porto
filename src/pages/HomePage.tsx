import { use } from "react";
import { ContentContext } from "../context/content-context";

import cube from "../assets/ExampleImage.jpg";
import ProjectOutput from "../components/ProjectOutput";

export default function HomePage() {
  const {getFeaturedProjects} = use(ContentContext)

  const featuredProjects = getFeaturedProjects()

  return (
    <>
      <img
        src={cube}
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      ></img>
      <section className="fixed bottom-2">
        <ProjectOutput
          projects={featuredProjects}
          bigCards={false}
          vertical={false}
        />
      </section>
    </>
  );
}
