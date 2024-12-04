import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <div className="my-10">
        <Resume />
      </div>
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
