import About from "@/compontes/About";
import Experience from "@/compontes/Experience";
import Hero from "@/compontes/Hero";
import Projects from "@/compontes/Projects";

export default function Home() {
  return (
    <div className="relative bg-black">
      <Hero />

      {/* Advanced transition with cybersecurity elements */}

      <About />

      {/* Enhanced section divider */}
      <div className="relative z-20">
        <div className="h-16 bg-gradient-to-b from-black via-gray-900/60 to-black transition-all duration-700 ease-in-out"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-60 transition-opacity duration-500"></div>

        {/* Grid overlay for section divider */}
        <div className="absolute inset-0 cyber-grid opacity-20 transition-opacity duration-500"></div>
        <div className="absolute inset-0 cyber-grid-dense opacity-12 transition-opacity duration-700"></div>

        {/* Code-like decorative elements */}
        <div className="absolute top-2 left-4 text-gray-400/70 font-mono text-xs transition-colors duration-300 hover:text-white/80">
          {"// EXPERIENCE_MODULE"}
        </div>
        <div className="absolute bottom-2 right-4 text-gray-500/70 font-mono text-xs transition-colors duration-300 hover:text-white/80">
          {"/* END_SECTION */"}
        </div>
      </div>

      <Experience />

      {/* Projects section divider */}
      <div className="relative z-20">
        <div className="h-16 bg-gradient-to-b from-black via-gray-800/40 to-black transition-all duration-700 ease-in-out"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60 transition-opacity duration-500"></div>

        {/* Enhanced grid overlay for projects section */}
        <div className="absolute inset-0 cyber-grid-animated opacity-25 transition-opacity duration-500"></div>
        <div className="absolute inset-0 cyber-grid-dense opacity-15 transition-opacity duration-700"></div>

        {/* Terminal prompt style */}
        <div className="absolute top-2 left-4 text-gray-300/80 font-mono text-xs transition-colors duration-300 hover:text-white">
          {"root@portfolio:~$ ls projects/"}
        </div>
        <div className="absolute bottom-2 right-4 text-gray-400/80 font-mono text-xs transition-colors duration-300 hover:text-white animate-pulse">
          {"[LOADING...]"}
        </div>
      </div>

      <Projects />

      {/* Footer transition */}
      <div className="relative z-20 mt-20">
        <div className="h-20 bg-gradient-to-b from-black to-gray-900/30 transition-all duration-700 ease-in-out"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent transition-opacity duration-500"></div>

        {/* Final grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30 transition-opacity duration-500"></div>
        <div className="absolute inset-0 cyber-grid-animated opacity-20 transition-opacity duration-700"></div>

        {/* End of file indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500/70 font-mono text-xs transition-colors duration-300 hover:text-white/90">
          {"// EOF - End of Portfolio"}
        </div>
      </div>
    </div>
  );
}
