"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shield,
  Code,
  Terminal,
  Lock,
  Database,
  Server,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500/5 rounded-full filter blur-3xl opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Subtle accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gray-400/10 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Professional floating icons */}
        <div className="absolute -top-20 -left-20 text-white/20 animate-float">
          <Terminal size={32} />
        </div>
        <div className="absolute -top-10 -right-20 text-gray-400/20 animate-float-delayed">
          <Lock size={28} />
        </div>
        <div className="absolute -bottom-10 left-10 text-white/20 animate-float">
          <Shield size={26} />
        </div>
        <div className="absolute top-20 -left-32 text-gray-500/20 animate-float delay-300">
          <Database size={24} />
        </div>
        <div className="absolute -top-32 right-10 text-white/20 animate-float-delayed delay-500">
          <Server size={30} />
        </div>
        <div className="absolute bottom-20 -right-28 text-gray-400/20 animate-float delay-700">
          <Code size={22} />
        </div>

        {/* Main content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Professional Profile Image */}
          <div className="relative mx-auto w-64 h-64 mb-12 animate-fade-in-up">
            {/* Outer professional ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow opacity-60"></div>

            {/* Secondary ring */}
            <div
              className="absolute inset-4 rounded-full border border-gray-400/30 animate-spin-slow opacity-40"
              style={{
                animationDirection: "reverse",
                animationDuration: "12s",
              }}
            ></div>

            {/* Profile image container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl shadow-black/50 bg-gray-900">
              <div className="relative w-full h-full group">
                <Image
                  src="/p.png"
                  alt="Natnael Gesiab Yohannes - Cybersecurity Specialist & Software Developer"
                  className="object-cover rounded-full transition-all duration-500 group-hover:scale-105"
                  priority
                  height={300}
                  width={300}
                />
              </div>
            </div>

            {/* Professional indicators */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge
                variant="outline"
                className="border-white/40 text-white bg-white/10 backdrop-blur-sm px-3 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                Software Developer
              </Badge>
              <Badge
                variant="outline"
                className="border-white/40 text-white bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                Cybersecurity Specialist
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-400/40 text-gray-300 bg-gray-400/10 backdrop-blur-sm px-3 py-2 text-sm font-medium hover:bg-gray-400/20 transition-colors"
              >
                Penetration Tester
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Natnael Yohannes Gesiab
            </h1>

            <div className="text-lg md:text-xl text-gray-400 space-y-3 max-w-2xl mx-auto">
              <p className="animate-fade-in-up delay-300">
                Full Stack Developer
              </p>
              <p className="animate-fade-in-up delay-300">
                Web & API Security Expert
              </p>
              <p className="animate-fade-in-up delay-500">
                Ethical Hacker & Vulnerability Researcher
              </p>
              <p className="animate-fade-in-up delay-700">
                DevSecOps Practitioner
              </p>
            </div>
          </div>

          <div className="border border-white/20 rounded-lg p-6 max-w-3xl mx-auto backdrop-blur-sm animate-fade-in-up delay-900 bg-gray-900/30">
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={16} className="text-white" />
              <span className="text-white font-mono text-sm">About</span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Passionate full-stack developer and cybersecurity professional
              with <span className="text-white font-semibold">3+ years</span> of
              experience in securing and building scalable web applications.
              Skilled in penetration testing, vulnerability assessment, and
              implementing DevSecOps practices, with a strong focus on threat
              detection and risk mitigation. Adept at bridging the gap between
              software development and security by designing secure,
              production-ready systems while identifying and remediating
              vulnerabilities through hands-on security testing.
            </p>
          </div>

          {/* Professional contact info */}
          <div className="border border-gray-400/20 rounded-lg p-4 max-w-2xl mx-auto backdrop-blur-sm animate-fade-in-up delay-1100 bg-gray-900/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <MapPin size={16} className="text-white" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} className="text-gray-400" />
                <span className="text-sm">yohannesnathael9@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Professional action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-1200 mb-12">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-base font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Code size={18} className="mr-2" />
              View Portfolio
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-black p-3 transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open("https://github.com/Natnael-crypto", "_blank")
                }
                title="GitHub Repository"
              >
                <Github size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-400/40 text-gray-400 hover:bg-gray-400 hover:text-black p-3 transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/natnael-yohannes-gesiab",
                    "_blank"
                  )
                }
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-black p-3 transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  (window.location.href = "mailto:yohannesnathael9@gmail.com")
                }
                title="Send Email"
              >
                <Mail size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
