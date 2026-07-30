import ProjectCard from "./ProjectCard";
import projectdata from "./ProjectData";

export default function ProjectGrid() {
  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-8"
    >
      {projectdata.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
