import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Code2, Calendar, Briefcase, Rocket } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      organization: "SoundVerse.ai",
      period: "Aug 2025 - Nov 2025",
      type: "Internship",
      icon: Briefcase,
      description: (
        <>
          Working as a Full Stack Developer Intern at{' '}
          <a href="https://soundverse.ai" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/50 underline-offset-4 hover:decoration-primary">
            SoundVerse.ai
          </a>
          , contributing to AI-powered music and audio technology solutions.
        </>
      ),
      responsibilities: [
        "Develop and maintain full-stack applications using modern web technologies",
        "Collaborate with AI/ML teams to integrate audio processing features",
        "Optimize application performance and user experience",
        "Participate in code reviews and agile development processes",
      ],
      skills: ["React.js", "Node.js", "AI Integration", "Audio Processing", "Full Stack Development"],
      highlight: true,
    },
    {
      title: "Web Development Lead",
      organization: "IOTA - Projects Club IIITS",
      period: "2025 - Present",
      type: "Leadership",
      icon: Rocket,
      description:
        "Leading the web development initiatives at IOTA, the premier projects club at IIIT Sricity, mentoring students and driving technical innovation.",
      responsibilities: [
        "Lead web development projects and mentor junior developers",
        "Organize technical workshops and coding bootcamps",
        "Collaborate with cross-functional teams on innovative projects",
        "Drive adoption of modern web technologies and best practices",
      ],
      skills: ["Team Leadership", "Web Development", "Mentoring", "Project Management", "Technical Training"],
      highlight: true,
    },
    {
      title: "Lead",
      organization: "Nirvana Club IIITS",
      period: "2023 - 2025",
      type: "Leadership",
      icon: Users,
      description:
        "Leading the Nirvana Club at IIIT Sricity, organizing events, managing team activities, and fostering a collaborative environment for students.",
      responsibilities: [
        "Lead and coordinate club activities and events",
        "Manage team of club members and volunteers",
        "Organize workshops and technical sessions",
        "Foster community engagement and participation",
      ],
      skills: ["Leadership", "Team Management", "Event Planning", "Communication"],
      highlight: false,
    },
    {
      title: "Member",
      organization: "Google Developer Groups on Campus IIITS",
      period: "2024 - 2025",
      type: "Community",
      icon: Code2,
      description:
        "Active member of Google Developer Groups on Campus, participating in tech talks, workshops, and collaborative projects.",
      responsibilities: [
        "Participate in technical workshops and sessions",
        "Collaborate on community projects",
        "Stay updated with latest Google technologies",
        "Contribute to knowledge sharing initiatives",
      ],
      skills: ["Google Technologies", "Community Building", "Technical Learning", "Collaboration"],
      highlight: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary rounded-full animate-float"></div>
        <div
          className="absolute bottom-32 right-20 w-32 h-32 border-2 border-secondary rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-accent rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Professional experience and leadership roles that have shaped my technical expertise and collaborative
            skills.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className={"group hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm hover:scale-[1.02] border border-border h-full"}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div
                      className={
                        "w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg bg-gradient-to-br from-primary to-secondary"
                      }
                    >
                      <experience.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-foreground">{experience.title}</CardTitle>
                      <p className="text-xl font-semibold text-primary">
                        {experience.organization === "SoundVerse.ai" ? (
                          <a
                            href="https://soundverse.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {experience.organization}
                          </a>
                        ) : (
                          experience.organization
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 lg:flex-shrink-0">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted/80 text-muted-foreground border border-muted-foreground/20"
                    >
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm font-medium border-2 border-primary/60 text-primary bg-primary/10 dark:bg-primary/10"
                    >
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">{experience.description}</p>

                  <div>
                    <h4 className="font-bold mb-3 text-lg text-foreground">Key Responsibilities:</h4>
                    <ul className="text-muted-foreground space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3">
                          <span className="text-primary mt-1 font-bold text-lg">•</span>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-lg text-foreground">Skills & Technologies:</h4>
                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-sm px-3 py-1 font-medium transition-all duration-200 bg-primary/10 dark:bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 dark:hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
