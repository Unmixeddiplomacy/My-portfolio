import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone, Sparkles, Code, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center bg-background/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20 shadow-2xl">
          <div className="mb-8">
            {/* Profile image avatar */}
            <div className="relative w-40 h-40 mx-auto mb-8">
              <img
                src="/placeholder-user.jpg"
                alt="Ashutosh Sinha profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-2xl mx-auto"
                style={{ zIndex: 2, position: "relative" }}
              />
              {/* Decorative floating icons remain */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-float shadow-lg">
                <Code className="h-4 w-4 text-white" />
              </div>
              <div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center animate-float shadow-lg"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="h-3 w-3 text-white" />
              </div>
              <div
                className="absolute top-1/2 -left-4 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center animate-float shadow-lg"
                style={{ animationDelay: "2s" }}
              >
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-foreground">
              Hi, I'm <span className="gradient-text">Ashutosh Sinha</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 text-balance font-medium">
              Full-Stack Developer & Tech Innovator
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>IIIT Sricity, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>(+91) 9129673640</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>sinhaashutosh2003@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            >
              <a href="#projects" className="flex items-center gap-2 text-white">
                <Sparkles className="h-5 w-5" />
                View My Work
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 bg-background"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:bg-blue-600/10 hover:text-blue-600 transition-all duration-300 rounded-full"
            >
              <a href="https://github.com/Unmixeddiplomacy" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:bg-orange-500/10 hover:text-orange-500 transition-all duration-300 rounded-full"
            >
              <a href="https://www.linkedin.com/in/ashutosh-sinha-a9119928a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:bg-purple-600/10 hover:text-purple-600 transition-all duration-300 rounded-full"
            >
              <a href="mailto:sinhaashutosh2003@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
