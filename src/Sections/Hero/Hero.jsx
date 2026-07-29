import React from "react";
import ProfileCard from "../../components/Cards/ProfileCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg text-blue-500 font-medium">Hello, I'm</p>

          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
            Akhil Chandran
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-600">
            MERN Stack Developer
          </h2>

          <p className="mt-6 text-gray-500 leading-8 max-w-xl">
            I build responsive, scalable, and modern web applications using
            React, Node.js, Express.js, and MongoDB.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Right side */}

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-20">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
