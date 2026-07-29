import BorderGlow from "./BorderGlow";

BorderGlow;

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-10 bg-white"
    >
      <div className="max-w-6xl w-full px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Experience</h2>

        <div className="space-y-8">
          <BorderGlow
            backgroundColor="#ffffff"
            glowColor="262 83 58"
            glowRadius={20}
            fillOpacity={0.12}
            colors={["#8b5cf6", "#3b82f6", "#14b8a6"]}
          >
            <div className="p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-bold ">Project Manager</h3>

                  <p className="text-blue-600 font-medium mt-1">
                    Trycle EduTech
                  </p>
                </div>

                <p className="text-gray-500 ">Jun 2020 – Present</p>
              </div>

              <ul className="list-disc ml-6 mt-6 space-y-3 ">
                <li>
                  Managed software development projects from planning to
                  delivery.
                </li>

                <li>
                  Coordinated cross-functional teams and monitored sprint
                  progress.
                </li>

                <li>
                  Worked closely with developers, designers, and stakeholders.
                </li>

                <li>Used Jira and Agile methodologies for project tracking.</li>

                <li>Improved operational efficiency and delivery timelines.</li>
              </ul>
            </div>
          </BorderGlow>

          <BorderGlow
            backgroundColor="#ffffff"
            glowColor="262 83 58"
            glowRadius={20}
            fillOpacity={0.12}
            colors={["#8b5cf6", "#3b82f6", "#14b8a6"]}
          >
            <div className=" p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-bold ">Operations Manager</h3>

                  <p className="text-blue-600 font-medium mt-1">
                    Trycle EduTech
                  </p>
                </div>

                <p className="text-gray-500 ">Jan 2019 – Jun 2020</p>
              </div>

              <ul className="list-disc ml-6 mt-6 space-y-3 ">
                <li>Managed day-to-day business operations.</li>

                <li>Optimized internal processes and workflows.</li>

                <li>Coordinated with multiple departments.</li>

                <li>Assisted in strategic planning and execution.</li>
              </ul>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
}

export default Experience;
