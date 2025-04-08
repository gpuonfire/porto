import data from "../assets/projects-data.json"

export default function ProjectPage() {
const projects = data.projects

    return (
      <>
        <h1>All Projects</h1>
        <section>
          <article>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni eaque provident soluta voluptatibus, quo temporibus, quasi debitis cumque voluptates possimus ipsum fugit? Nam expedita repudiandae dicta? Voluptatem, cupiditate molestias!</p>
            <div>Thumbnail</div>
          </article>

          {/* {projects.map((project) => (

          ))} */}
        </section>
      </>
    );
  }
  