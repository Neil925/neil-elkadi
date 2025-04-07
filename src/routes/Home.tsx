import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="p-3 space-y-5">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
