import { HiOutlineMapPin, HiOutlineBriefcase } from "react-icons/hi2";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJira,
} from "react-icons/si";
import BorderGlow from "./BorderGlow";

const iconMap = {
  React: <SiReact />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  Jira: <SiJira />,
};

const experiences = [
  {
    role: "Project Manager",
    company: "Trycle EduTech",
    duration: "Jun 2020 – Present",
    years: "5+ Years",
    location: "Calicut, Kerala",
    mode: "Hybrid",
    stack: ["React", "Node.js", "MongoDB", "Express", "Jira", "Agile"],
    points: [
      "Managed software development projects from planning to delivery.",
      "Led Agile ceremonies including sprint planning and retrospectives.",
      "Coordinated cross-functional teams and monitored sprint progress.",
      "Collaborated with developers, designers, and stakeholders.",
      "Improved operational efficiency and delivery timelines.",
    ],
  },
  {
    role: "Operations Manager",
    company: "Trycle EduTech",
    duration: "Jan 2019 – Jun 2020",
    years: "1.5 Years",
    location: "Calicut, Kerala",
    mode: "On-site",
    stack: ["Jira", "Leadership", "Operations", "Planning"],
    points: [
      "Managed day-to-day business operations.",
      "Optimized internal processes and workflows.",
      "Coordinated multiple departments.",
      "Supported strategic planning and execution.",
    ],
  },
];

function ExperienceCard({
  role,
  company,
  duration,
  years,
  location,
  mode,
  stack,
  points,
}) {
  return (
    <BorderGlow
      backgroundColor="var(--card)"
      glowColor="262 83 58"
      glowRadius={18}
      fillOpacity={0.12}
      colors={["#8b5cf6", "#3b82f6", "#14b8a6"]}
    >
      <div className="p-4 md:p-5 rounded rounded-4xl max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="space-y-1">
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-900"
              style={{ color: "var(--text)" }}
            >
              {role}
            </h3>

            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <HiOutlineBriefcase />
              {company}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <HiOutlineMapPin />
                {location}
              </span>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 font-medium">
                {mode}
              </span>
            </div>
          </div>

          <div className="text-left lg:text-right">
            <p
              className="font-semibold text-gray-900"
              style={{ color: "var(--text)" }}
            >
              {duration}
            </p>

            <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
              {years}
            </span>
          </div>
        </div>

        {/* Stack */}

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 "
            >
              {iconMap[tech]}
              {tech}
            </span>
          ))}
        </div>

        {/* Points */}

        <ul className="mt-5 grid gap-x-8 gap-y-2 pl-5 md:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="list-disc leading-5">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </BorderGlow>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-2">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h3
          className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl"
          style={{ color: "var(--text)" }}
        >
          Experience
        </h3>

        <div className="space-y-8">
          {experiences.map((job) => (
            <ExperienceCard key={job.role} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
