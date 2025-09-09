import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, BarChart } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Dynamic Ganache",
      description:
        "A modern web application showcasing dynamic content management and responsive design patterns.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack Development",
      demo: "https://dynamic-ganache-700d7c.netlify.app/",
      github: "#",
      image: "1.png",
    },
    {
      title: "Roofle Offers",
      description:
        "Commercial roofing platform with advanced offer management and client interaction features.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      category: "Full Stack Development",
      demo: "https://offers.roofle.com/",
      github: "#",
      image: "2.png",
    },
    {
      title: "Green Stack",
      description:
        "Sustainable technology platform built with modern stack and eco-friendly design principles.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "Full Stack Development",
      demo: "https://green-stack-coral.vercel.app/",
      github: "#",
      image: "3.png",
    },
    {
      title: "CSBSN Frontend",
      description:
        "Corporate frontend application with advanced user interface and business logic integration.",
      tech: ["React", "TypeScript", "Material-UI", "Redux"],
      category: "Full Stack Development",
      demo: "https://csbsn-frontend.vercel.app/",
      github: "#",
      image: "5.png",
    },
    {
      title: "Polls Nation",
      description:
        "Interactive polling platform with real-time voting capabilities and comprehensive analytics.",
      tech: ["Nextjs", "Go", "PostgresQL", "AWS"],
      category: "Full Stack Development",
      demo: "https://www.pollsnation.com/",
      github: "#",
      image: "4.png",
    },
  ];

  const stats = [
    {
      number: "7+",
      label: "Full Stack Projects",
      description: "Complete web applications from concept to deployment",
    },
    {
      number: "16+",
      label: "Security Assessments",
      description: "Web and mobile application penetration tests",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects & Security Work</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of recent full-stack development projects and security
            assessments, demonstrating expertise in both building and securing
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-medium text-center">
              <CardContent className="pt-8">
                <div className="flex items-center justify-center mb-4">
                  <BarChart className="w-8 h-8 text-primary mr-3" />
                  <div className="text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-medium hover:shadow-large transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              {/* Project preview image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl mx-6 mt-2">
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
              </div>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
