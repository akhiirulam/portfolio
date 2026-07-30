import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function ProjectCard({ project }) {
  return (
    <div className="group flex h-[650px] flex-col overflow-hidden rounded-2xl border border-gray-200  shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* ================= IMAGE ================= */}

      <div className="h-52 w-full overflow-hidden ">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* ================= TITLE ================= */}

      <div className="border-b border-gray-100 p-5">
        <h3
          className="text-2xl font-bold text-gray-900"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>

        <p
          className="mt-2 text-sm leading-6 text-gray-600 line-clamp-2"
          style={{ color: "var(--text)" }}
        >
          {project.description}
        </p>
      </div>

      {/* ================= STACK ================= */}

      <div className="border-b border-gray-100 p-5">
        <h4
          className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500"
          style={{ color: "var(--text)" }}
        >
          Tech Stack
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ================= FEATURES ================= */}

      <div className="flex-1 overflow-y-auto border-b border-gray-100 p-5">
        <h4
          className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500"
          style={{ color: "var(--text)" }}
        >
          Key Features
        </h4>

        {project.features?.length ? (
          <ul
            className="space-y-3 text-sm text-gray-700"
            style={{ color: "var(--text)" }}
          >
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 text-green-500">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex h-full items-center justify-center text-sm italic text-gray-400">
            More details available in project page
          </div>
        )}
      </div>

      {/* ================= FOOTER ================= */}

      <div className="flex items-center justify-between p-5">
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-600"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
        >
          View Details
          <HiArrowRight />
        </Link>
      </div>
    </div>
  );
}
