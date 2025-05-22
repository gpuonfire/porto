import { ProjectOutputProps } from "../@types/youAreJustMyType";
import ProjectCard from "./ProjectCard";

export default function ProjectOutput({ projects }: ProjectOutputProps) {
  return (
    <div
      className={"flex flex-col overflow-x-auto scroll-smooth"}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
