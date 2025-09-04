import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Code,
  Database,
  Cloud,
  Terminal,
  Bug,
  Lock,
  Zap,
} from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      title: "DevSecOps",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        "Secure Coding",
        "Threat Modeling",
        "Docker",
        "CI/CD Security",
        "AWS",
      ],
      color: "bg-white text-black",
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Go",
        "Python",
        "Node.js",
        ".NET",
        "JavaScript",
        "TypeScript",
        "Flutter",
        "React Native",
        "Bash",
        "PowerShell",
      ],
      color: "bg-gray-300 text-black",
    },
    {
      title: "Penetration Testing",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        "Web & API Security",
        "Network Security",
        "Vulnerability Assessment",
        "Ethical Hacking",
      ],
      color: "bg-gray-500 text-white",
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "Database Security"],
      color: "bg-gray-700 text-white",
    },
  ];

  const certifications = [
    { name: "Certified Cybersecurity", org: "ISC2", year: "2025" },
    { name: "Red Hat System Administration I", org: "Red Hat", year: "2024" },
    {
      name: "CCSK v4.1 Foundation Training",
      org: "Cloud Security Alliance",
      year: "2024",
    },
    { name: "API Penetration Testing", org: "API University", year: "2025" },
    {
      name: "Penetration Testing and Ethical Hacking",
      org: "Cybrary",
      year: "2024",
    },
    {
      name: "Security Operations Center in Practice",
      org: "IBM",
      year: "2025",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A dedicated full-stack developer and cybersecurity professional with
            expertise in building secure applications, conducting penetration
            testing, and implementing robust security measures across the
            software development lifecycle. Skilled at delivering scalable,
            production-ready solutions while ensuring security best practices
            are integrated from design to deployment.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Zap className="text-gray-400" />
            Technical Expertise
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="bg-black/50 border-gray-600 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Lock className="text-gray-400" />
            Education
          </h3>

          <Card className="bg-black/50 border-gray-600 backdrop-blur-sm max-w-2xl mx-auto hover:bg-black/70 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Bachelor of Science in Software Engineering and Computing
                  Technology
                </h4>
                <p className="text-gray-300 font-medium mb-2">
                  Cybersecurity Stream
                </p>
                <p className="text-gray-400">Addis Ababa University</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Shield className="text-white" />
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={cert.name}
                className="bg-black/50 border-gray-600 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-1 text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-1">{cert.org}</p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
