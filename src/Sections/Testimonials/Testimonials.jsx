const testimonials = [
  {
    name: "John Doe",
    role: "Senior Software Engineer",
    company: "ABC Technologies",
    message:
      "Akhil consistently demonstrates strong leadership, excellent communication, and an exceptional ability to deliver projects on time. Working with him has always been a pleasure.",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    company: "XYZ Solutions",
    message:
      "Akhil bridges the gap between business and engineering teams effectively. His project management skills and technical understanding make him an invaluable team member.",
  },
  {
    name: "Rahul Kumar",
    role: "Team Lead",
    company: "TechNova",
    message:
      "A dedicated professional who always focuses on quality and collaboration. Akhil is proactive, dependable, and continuously strives for excellence.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-8"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">Testimonials</h2>

        <p
          className="mx-auto mb-14 max-w-2xl text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          Feedback from professionals I've worked with throughout my career.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Quote */}
              <div className="mb-5 text-5xl text-blue-500">“</div>

              <p
                className="leading-7 italic"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.message}
              </p>

              <div className="mt-8 border-t pt-5">
                <h3 className="text-lg font-bold">{item.name}</h3>

                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.role}
                </p>

                <p className="text-sm font-medium text-blue-600">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
