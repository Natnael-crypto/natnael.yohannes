"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/natnael-profile.jpg";

const Hero = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src="/p.png"
                alt="Natnael Yohannes Gesiab"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-large"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/5 to-transparent"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  Software Developer
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Cybersecurity Specialist
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Penetration Tester
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
                Natnael Yohannes <span className="text-gray-600">Gesiab</span>
              </h1>

              <div className="space-y-2 text-xl lg:text-2xl text-muted-foreground mb-6">
                <p>Full Stack Developer</p>
                <p>Web & API Security Expert</p>
                <p>Ethical Hacker & Vulnerability Researcher</p>
                <p>DevSecOps Practitioner</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Passionate full-stack developer and cybersecurity professional
              with 3+ years of experience in securing and building scalable web
              applications. Skilled in penetration testing, vulnerability
              assessment, and implementing DevSecOps practices, with a strong
              focus on threat detection and risk mitigation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button
                size="lg"
                className="min-w-[160px]"
                onClick={() => {
                  window.location.href = "mailto:yohannesnathael9@gmail.com";
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-w-[160px]"
              >
                <a
                  href="/Natnael-Gesiab-Yohannes-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="p-2">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
