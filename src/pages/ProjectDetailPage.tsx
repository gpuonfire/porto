import {useParams} from "react-router"
import data from "../assets/projects-data.json"
import { Project } from "../types"

export default function ProjectDetailPage() {
const proId = useParams().proId
const projects = data.projects
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
  