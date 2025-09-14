import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, MessageCircle, FileText } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "ChatApp",
      description:
        "A full-stack real-time chat application with instant messaging, group chats, and secure authentication.",
      icon: MessageCircle,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
      features: [
        "Real-time one-on-one and group messaging",
        "Secure JWT authentication",
        "Image uploads via Cloudinary",
        "Responsive design with loading indicators",
        "Persistent message storage",
      ],
      github: "https://github.com/Unmixeddiplomacy/Chat-App",
      demo: "https://chat-app1-dfsm.onrender.com",
    },
    {
      title: "MegaBlog",
      description:
        "A modern blogging platform with user authentication, protected routes, and comprehensive blog management.",
      icon: FileText,
      technologies: ["React.js", "Vite", "Redux Toolkit", "Appwrite", "Tailwind CSS", "React Hook Form"],
      features: [
        "Secure user authentication and protected routes",
        "Blog post creation, editing, and publishing",
        "Personalized user dashboards",
        "File storage and user management via Appwrite",
        "Responsive UI with Tailwind CSS",
      ],
      github: "https://github.com/Unmixeddiplomacy/MegaBlog",
      demo: "https://mega-blog-dm46w6v9c-ashutosh-sinhas-projects-1de61b86.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Here are some of my recent projects that showcase my skills in full-stack development and modern web
            technologies.
          </p>
        </div>

  <div className="grid md:grid-cols-2 gap-8 items-stretch content-stretch">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 border border-border h-full"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/5 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/10 transition-colors border border-primary/20">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-muted/60 dark:bg-muted/40 text-muted-foreground border border-muted-foreground/20 hover:bg-muted/80 dark:hover:bg-muted/60 transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-2 hover:bg-muted/20 dark:hover:bg-muted/10 bg-transparent"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Unmixeddiplomacy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
