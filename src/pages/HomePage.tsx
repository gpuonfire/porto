import cube from "../assets/ExampleImage.jpg";
import ProjectCard from "../components/ProjectCard";
import data from "../assets/data.json";

interface Project {
  id: string;
  title: string;
  date: string;
  featured: boolean;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  videoUrl: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}

interface Data {
  projects: Project[];
}

export default function HomePage() {
  
  const project: Project = data.projects[0] ;

  return (
    <>
      <h1>HomePage</h1>
      <img src={cube} className="absolute inset-0 w-full h-full object-cover object-center -z-10" ></img>
      <section className="fixed bottom-2" >
        <div className="flex overflow-x-auto scroll-smooth px-5 py-5 gap-4" >
            <ProjectCard 
            id = {project.id}
            title = {project.title}
            description = {project.description}
            thumbnail = {project.thumbnail} />
        </div>
          
      </section>
    </>
  );
}
