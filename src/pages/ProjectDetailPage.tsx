import {useParams} from "react-router"
import { Project } from "../types"
import {use} from "react"
import { ContentContext } from "../context/content-context"

export default function ProjectDetailPage() {
  const {getProject, defaultProject} = use(ContentContext)
  let project = defaultProject
  const proId = useParams().proId ?? "" // if ".proId" returns undefined, take empty string

try {
  project = getProject(proId)
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log("An unknown error occurred");
  }
  // show "sit not found"
}

    return (
      <>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        
        
      </>
    );
  }
  