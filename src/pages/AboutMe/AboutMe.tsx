import {use} from "react"
import { ContentContext } from "../../context/content-context";

export default function AboutMePage() {
const {aboutMe} = use(ContentContext)

    return (
      <>
        <h1 >About Me : ther is mor </h1>
        <p>Here could be a image or two of me?</p>
        <h2>Hobbies</h2>
        <p>{aboutMe.hobbies}</p>
        <h2>Interests</h2>
        <p>{aboutMe.interests}</p>
        <p>{aboutMe.education}</p>
      </>
    );
  }
  