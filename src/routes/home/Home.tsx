import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <div className="">
      <div className="mb-28">
        <Hero />
        <About />
      </div>
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
