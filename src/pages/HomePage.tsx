import cube from "../assets/ExampleImage.jpg";
import data from "../assets/projects-data.json";
import ProjectOutput from "../components/ProjectOutput";
import { Project } from "../types";


export default function HomePage() {

  let featuredProjects: Array<Project> = [];

  data.projects.forEach((project) => {
    if (project.featured) {
      featuredProjects.push(project)
    }
  })


  return (
    <>
      <img src={cube} className="absolute inset-0 w-full h-full object-cover object-center -z-10" ></img>
      <section className="fixed bottom-2" >
        <ProjectOutput projects={featuredProjects} bigCards={false} vertical={false} />
      </section>
    </>
  );
}
