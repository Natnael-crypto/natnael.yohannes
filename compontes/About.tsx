import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 md:sticky md:top-24 self-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyber-green">
                Security-First Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A dedicated full-stack developer and cybersecurity professional
                with expertise in building secure applications, conducting
                penetration testing, and implementing robust security measures
                across the software development lifecycle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Skilled at delivering scalable, production-ready solutions while
                ensuring security best practices are integrated from design to
                deployment. Passionate about bridging the gap between
                development and security.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyber-blue" />
                <span className="text-sm">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-cyber-green" />
                <span className="text-sm">3+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm">Certified Professional</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">Team Collaborator</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-cyber-green/20 text-cyber-green border-cyber-green/30"
                >
                  Security First
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30"
                >
                  Clean Code
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30"
                >
                  Continuous Learning
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/20 text-primary border-primary/30"
                >
                  Team Work
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/50 border-cyber-green/20 hover:border-cyber-green/40 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-cyber-green">
                  Development Focus
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Secure web application development</li>
                  <li>• API security implementation</li>
                  <li>• DevSecOps pipeline integration</li>
                  <li>• Code security review and auditing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-cyber-blue">
                  Security Expertise
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Penetration testing and vulnerability assessment</li>
                  <li>• Web and network security analysis</li>
                  <li>• Threat modeling and risk assessment</li>
                  <li>• Security incident response</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-accent">
                  Collaboration
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cross-functional team leadership</li>
                  <li>• Security awareness training</li>
                  <li>• Technical documentation</li>
                  <li>• Mentor junior developers</li>
                </ul>
              </CardContent>
            </Card>

            {/* Added: Technical Expertise */}
            <Card
              className="bg-card/50 border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors"
              id="skills"
            >
              <CardContent className="p-6 space-y-6">
                <h4 className="text-lg font-semibold text-cyber-blue">
                  Technical Expertise
                </h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">DevSecOps</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-cyber-green/20 text-cyber-green border-cyber-green/30"
                      >
                        Secure Coding
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-cyber-green/20 text-cyber-green border-cyber-green/30"
                      >
                        Threat Modeling
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-cyber-green/20 text-cyber-green border-cyber-green/30"
                      >
                        Docker
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-cyber-green/20 text-cyber-green border-cyber-green/30"
                      >
                        CI/CD Security
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-cyber-green/20 text-cyber-green border-cyber-green/30"
                      >
                        AWS
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Programming</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        Go
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        Python
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        Node.js
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        .NET
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        JavaScript
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        TypeScript
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        Flutter
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        React Native
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        Bash
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        PowerShell
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Penetration Testing</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-accent/20 text-accent border-accent/30"
                      >
                        Web & API Security
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-accent/20 text-accent border-accent/30"
                      >
                        Network Security
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-accent/20 text-accent border-accent/30"
                      >
                        Vulnerability Assessment
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-accent/20 text-accent border-accent/30"
                      >
                        Ethical Hacking
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">Database</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30"
                      >
                        MySQL
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30"
                      >
                        PostgreSQL
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30"
                      >
                        Database Security
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Added: Education */}
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  Education
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Bachelor of Science in Software Engineering and Computing
                    Technology Cybersecurity Stream
                  </li>
                  <li>• Addis Ababa University</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
