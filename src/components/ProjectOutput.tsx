import { ProjectOutputProps } from "../types"
import ProjectCard from "./ProjectCard"


export default function ProjectOutput({ projects, bigCards, vertical }: ProjectOutputProps) {
    
  const flexStyle = `flex flex-${vertical ? "col" : "row"}`
  
  return (
        
        <div className={flexStyle + " overflow-x-auto scroll-smooth px-5 py-5 gap-4"} >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              isBig={bigCards}
              {...project}
            />
          ))}
            
        </div>
        
    )
}