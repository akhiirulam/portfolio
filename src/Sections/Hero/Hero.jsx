import ProfileCard from "./ProfileCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center p-5 bg-white transition-colors duration-300 py-8"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-base font-semibold text-blue-600 dark:text-blue-400 md:text-lg">
            Hello, I'm
          </p>

          <h1
            className="mt-3 text-4xl font-bold dark:text-white sm:text-5xl lg:text-6xl"
            style={{ color: "var(--text)" }}
          >
            Akhil Chandran
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-gray-600 dark:text-gray-300 sm:text-2xl lg:text-3xl">
            MERN Stack Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-500 dark:text-gray-400 lg:mx-0">
            I build responsive, scalable, and modern web applications using
            React, Node.js, Express.js, MongoDB, and modern frontend
            technologies.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center text-white transition hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href={import.meta.env.VITE_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Akhil_Chandran_jevdan.pdf"
              className="rounded-lg border border-blue-600 px-6 py-3 text-center text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
