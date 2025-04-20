import {useParams} from "react-router"
import { Project } from "../types"
import {use} from "react"
import { ProjectContext } from "../context/project-context"

export default function ProjectDetailPage() {
  const {projects} = use(ProjectContext)

const proId = useParams().proId
let project : Project

projects.forEach((projectElement) => {
  if (projectElement.id === proId) {
    project = projectElement
  }
})



    return (
      <>
        <h1>Project Details</h1>
        {/* {project ? <p>{project.id}</p> : <p>Project is loading...</p>} */}
        
      </>
    );
  }
  