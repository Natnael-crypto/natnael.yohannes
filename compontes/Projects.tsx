import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Shield, Globe, Zap, Target } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Dynamic Ganache",
      url: "https://dynamic-ganache-700d7c.netlify.app/",
      description:
        "A modern web application showcasing dynamic content management and responsive design patterns.",
      type: "Full Stack Development",
      icon: <Code className="w-5 h-5" />,
      color: "bg-white text-black",
      image: "/1.png",
    },
    {
      title: "Roofle Offers",
      url: "https://offers.roofle.com/",
      description:
        "Commercial roofing platform with advanced offer management and client interaction features.",
      type: "Full Stack Development",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-gray-300 text-black",
      image: "/2.png",
    },
    {
      title: "Green Stack",
      url: "https://green-stack-coral.vercel.app/",
      description:
        "Sustainable technology platform built with modern stack and eco-friendly design principles.",
      type: "Full Stack Development",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-gray-500 text-white",
      image: "/3.png",
    },
    {
      title: "CSBSN Frontend",
      url: "https://csbsn-frontend.vercel.app/",
      description:
        "Corporate frontend application with advanced user interface and business logic integration.",
      type: "Full Stack Development",
      icon: <Code className="w-5 h-5" />,
      color: "bg-gray-700 text-white",
      image: "/4.png",
    },
    {
      title: "Polls Nation",
      url: "https://www.pollsnation.com/",
      description:
        "Interactive polling platform with real-time voting capabilities and comprehensive analytics.",
      type: "Full Stack Development",
      icon: <Target className="w-5 h-5" />,
      color: "bg-gray-800 text-white",
      image: "/5.png",
    },
  ];

  const stats = [
    {
      number: "7+",
      label: "Full Stack Projects",
      description: "Complete web applications from concept to deployment",
      icon: <Code className="w-6 h-6" />,
      color: "bg-white text-black",
    },
    {
      number: "16+",
      label: "Security Assessments",
      description: "Web and mobile application penetration tests",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-gray-400 text-black",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects & Security Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of recent full-stack development projects and security
            assessments, demonstrating expertise in both building and securing
            applications.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="bg-black/50 border-gray-600 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Globe className="text-white" />
            Recent Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="bg-black/60 border-gray-600 backdrop-blur-sm hover:bg-black/80 transition-all duration-300 group overflow-hidden cursor-pointer h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                    {/* External link icon */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/80 backdrop-blur-sm text-white p-2 rounded-lg group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110 opacity-0 group-hover:opacity-100">
                        <ExternalLink size={16} />
                      </div>
                    </div>

                    {/* Project type badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge
                        variant="outline"
                        className="border-gray-400/60 text-gray-400 bg-black/80 backdrop-blur-sm text-xs"
                      >
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-white">
                      <div
                        className={`p-2 rounded-lg ${project.color} flex-shrink-0`}
                      >
                        {project.icon}
                      </div>
                      <span className="text-lg">{project.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-gray-400 mb-4">
            Interested in collaborating on your next project?
          </p>
          <div className="flex items-center justify-center gap-2 text-white">
            <Shield size={16} />
            <span className="text-sm">
              Secure development practices • Comprehensive testing • Modern
              technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
