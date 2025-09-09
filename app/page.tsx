import About from "@/compontes/About";
import Contact from "@/compontes/Contact";
import Experience from "@/compontes/Experience";
import Hero from "@/compontes/Hero";
import Navigation from "@/compontes/Nav";
import Projects from "@/compontes/Projects";

export default function Home() {
  return (
    <div className="relative bg-black">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
