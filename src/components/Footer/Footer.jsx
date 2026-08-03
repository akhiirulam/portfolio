import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="mt-16 border-t"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold">Akhil Chandran</h2>

            <p
              className="mt-4 leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              MERN Stack Developer passionate about building scalable web
              applications and creating intuitive user experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul
              className="mt-4 space-y-3"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>
                <a href="#home" className="transition hover:text-blue-500">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="transition hover:text-blue-500"
                >
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="transition hover:text-blue-500">
                  Projects
                </a>
              </li>

              <li>
                <a href="#education" className="transition hover:text-blue-500">
                  Education
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>

            <div className="mt-5 flex justify-center gap-5 text-2xl md:justify-start">
              <a
                href="https://github.com/akhiirulam"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-110 hover:text-blue-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/lifeofakhilan"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-110 hover:text-blue-500"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/YOUR-INSTAGRAM"
                target="_blank"
                rel="noreferrer"
                className="transition hover:scale-110 hover:text-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:akhiirulam@gmail.com"
                className="transition hover:scale-110 hover:text-red-500"
              >
                <FaEnvelope />
              </a>
            </div>

            <div
              className="mt-6 space-y-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>📧 akhiirulam@gmail.com</p>
              <p>📍 Kerala, India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center text-sm md:flex-row md:text-left"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Akhil Chandran. All Rights Reserved.
          </p>

          <p>Built with React • Tailwind CSS • Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
