import ProjectCard from "./ProjectCard";
import projectdata from "./ProjectData";

export default function Projects() {
  return (
    <section id="projects" className=" py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2
            className="text-4xl font-bold text-gray-900"
            style={{ color: "var(--text)" }}
          >
            Projects
          </h2>

          <p className="mt-4 text-gray-500">
            Some of the projects I've built using the MERN Stack.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projectdata.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
