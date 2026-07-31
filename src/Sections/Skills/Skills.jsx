function Skills() {
  const managerialSkills = [
    "Project Management",
    "Agile / Scrum",
    "Sprint Planning",
    "Team Leadership",
    "Stakeholder Management",
    "Cross-functional Collaboration",
    "Risk Management",
    "Requirement Gathering",
    "Jira",
    "Zoho Projects",
    "Communication",
    "Problem Solving",
  ];

  const technicalSkills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "REST APIs",
    "JWT Authentication",
    "Git",
    "GitHub",
    "Vite",
    "Axios",
    "Postman",
  ];

  return (
    <section
      id="skills"
      className="py-16"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">Skills</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Managerial Skills */}
          <div
            className="rounded-2xl border p-8 shadow-md"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h3 className="mb-6 text-2xl font-bold">📋 Managerial Skills</h3>

            <div className="flex flex-wrap gap-3">
              {managerialSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div
            className="rounded-2xl border p-8 shadow-md"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h3 className="mb-6 text-2xl font-bold">💻 Technical Skills</h3>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
