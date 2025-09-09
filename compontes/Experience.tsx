import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Calendar,
  MapPin,
  Shield,
  Code,
  Search,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer & Security Consultant",
      company: "Freelance Contractor",
      location: "Addis Ababa, Ethiopia",
      period: "2023 – present",
      type: "Freelance",
      description:
        "As a freelance contractor, I've spent the last two years designing, developing, and securing web, mobile, and API applications for diverse clients. My work involved implementing robust security features from the ground up, conducting thorough code reviews to identify and remediate vulnerabilities, and integrating secure development practices into the Software Development Life Cycle (SDLC). I also developed automated tools for testing and validation, ensuring the reliability and security of deployed systems.",
      skills: [
        "Full-Stack Development",
        "Web Security",
        "API Security",
        "Mobile Security",
        "Code Review",
        "SDLC",
        "DevSecOps",
        "Automated Testing",
      ],
      icon: <Code className="w-5 h-5" />,
      color: "bg-gray-800 text-white",
    },
    {
      title: "Security Engineer Intern",
      company: "Development Bank of Ethiopia",
      location: "Addis Ababa, Ethiopia",
      period: "Feb - May 2023",
      type: "Internship",
      description:
        "As a Security Engineer Intern at the Development Bank of Ethiopia, I monitored and analyzed security incidents, performed incident triage, and responded to threats by analyzing logs and network traffic. I conducted penetration testing on internal web applications, identified vulnerabilities, and recommended mitigation strategies. Additionally, I assisted in firewall configuration reviews and developed automated scripts for reconnaissance and threat detection, contributing to the bank's cybersecurity resilience.",
      skills: [
        "Incident Response",
        "Penetration Testing",
        "Log Analysis",
        "Network Security",
        "Firewall Configuration",
        "Threat Detection",
        "Vulnerability Assessment",
      ],
      icon: <Shield className="w-5 h-5" />,
      color: "bg-gray-800 text-white",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            3+ years of hands-on experience in cybersecurity, software
            development, and security consulting
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-gray-400 to-gray-600 opacity-30"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-white rounded-full border-4 border-black shadow-lg"></div>

                {/* Content */}
                <div className="ml-20">
                  <Card className="bg-card/50 border-cyber-green/20 hover:border-cyber-green/40 transition-colors">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-lg ${exp.color} flex-shrink-0`}
                          >
                            {exp.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl text-white mb-2">
                              {exp.title}
                            </CardTitle>
                            <div className="space-y-1">
                              <p className="text-gray-300 font-medium flex items-center gap-2">
                                <Briefcase size={16} />
                                {exp.company}
                              </p>
                              <p className="text-gray-400 flex items-center gap-2 text-sm">
                                <MapPin size={14} />
                                {exp.location}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <Badge
                            variant="outline"
                            className={`${
                              exp.type === "Freelance"
                                ? "border-white/40 text-white bg-white/10"
                                : "border-gray-400/40 text-gray-400 bg-gray-400/10"
                            }`}
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Search size={16} className="text-gray-400" />
                          Key Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
