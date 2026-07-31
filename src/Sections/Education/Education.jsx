import BorderGlow from "../Experience/BorderGlow";

function Education() {
  return (
    <section
      id="education"
      className="flex min-h-screen items-center justify-center py-8"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">Education</h2>

        <div className="space-y-6">
          {/* Master's Degree */}
          <BorderGlow
            backgroundColor="var(--card)"
            glowColor="262 83 58"
            glowRadius={18}
            fillOpacity={0.12}
            colors={["#8b5cf6", "#3b82f6", "#14b8a6"]}
          >
            <div className="rounded-2xl p-6">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    Master of Computer Applications (MCA)
                  </h3>

                  <p className="mt-1 font-semibold text-blue-600">
                    St. Philomena's College, Mysore
                  </p>

                  <div
                    className="mt-3 flex flex-wrap gap-4 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>📍 Mysore, Karnataka</span>
                    <span>🎓 Mysore University</span>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <p className="font-semibold">2016 – 2018</p>
                </div>
              </div>

              <div className="mt-5">
                <p style={{ color: "var(--text-secondary)" }}>
                  Specialized in software development, database management,
                  programming, and web technologies.
                </p>
              </div>
            </div>
          </BorderGlow>

          {/* Bachelor's Degree */}
          <BorderGlow
            backgroundColor="var(--card)"
            glowColor="262 83 58"
            glowRadius={18}
            fillOpacity={0.12}
            colors={["#8b5cf6", "#3b82f6", "#14b8a6"]}
          >
            <div className="rounded-2xl p-6">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    Bachelor of Computer Applications (BCA)
                  </h3>

                  <p className="mt-1 font-semibold text-blue-600">
                    Don Bosco College
                  </p>

                  <div
                    className="mt-3 flex flex-wrap gap-4 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>📍 Sulthan Bathery, Wayanad</span>
                    <span>🎓 University of Calicut</span>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <p className="font-semibold">2013 – 2016</p>
                </div>
              </div>

              <div className="mt-5">
                <p style={{ color: "var(--text-secondary)" }}>
                  Studied programming fundamentals, algorithms, networking,
                  databases, and software engineering.
                </p>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
}

export default Education;
