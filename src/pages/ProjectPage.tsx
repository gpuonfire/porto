import {use} from "react"
import { ContentContext } from "../context/content-context";
import ProjectOutput from "../components/ProjectOutput";

export default function ProjectPage() {
const {projects} = use(ContentContext)

    return (
      <div className="flex flex-col items-center justify-center p-3 bg-primary" >
        <h1 className="text-white text-6xl m-6" >My projects</h1>
        <section>
          <ProjectOutput projects={projects} bigCards={true} vertical={true} />
        </section>
      </div>
    );
  }