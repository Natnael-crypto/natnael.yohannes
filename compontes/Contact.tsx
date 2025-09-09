import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to secure your next project? Let's discuss how we can work
            together to build secure, scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 mx-auto max-w-3xl gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyber-green">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need a security audit, secure application
                development, or cybersecurity consultation, I'm here to help.
                Let's discuss your project requirements and how we can enhance
                your security posture.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/50 border-cyber-green/20 hover:border-cyber-green/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-cyber-green mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        yohannesnathael9@gmail.com
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cyber-blue mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Addis Ababa, Ethiopia
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Available for remote work globally
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Availability</h4>
                      <p className="text-muted-foreground">Monday - Saturday</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        9:00 AM - 6:00 PM (EAT)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex space-x-6 pt-6 mx-auto justify-center">
              <a
                href="https://github.com/Natnael-crypto"
                className="text-muted-foreground hover:text-cyber-green transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/natnael-yohannes-gesiab"
                className="text-muted-foreground hover:text-cyber-blue transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:yohannesnathael9@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Contact Form
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Send className="w-6 h-6 text-cyber-green" />
                <span>Send a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="bg-secondary/50 border-border/50 focus:border-cyber-green"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-secondary/50 border-border/50 focus:border-cyber-green"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project Discussion / Security Consultation"
                  className="bg-secondary/50 border-border/50 focus:border-cyber-green"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, security requirements, or how I can help..."
                  rows={6}
                  className="bg-secondary/50 border-border/50 focus:border-cyber-green resize-none"
                />
              </div>

              <Button
                size="lg"
                className="w-full border-white/70 bg-gradient-cyber hover:shadow-glow-cyber transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I'll get back to you within 24 hours. For urgent security
                matters, please email directly.
              </p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
