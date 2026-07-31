import Education from "../Sections/Education/Education";
import Experience from "../Sections/Experience/Experience";
import Hero from "../Sections/Hero/Hero";
import Project from "../Sections/Projects/Project";
import Skills from "../Sections/Skills/Skills";
import Testimonials from "../Sections/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Project />
      <Education />
      <Skills />
      <Testimonials />
    </div>
  );
}

export default Home;
