"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Wrench, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C/C++", "JavaScript", "HTML/CSS", "Assembly"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      textColor: "text-blue-700 dark:text-blue-300",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Vite", "React Hook Form"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      textColor: "text-emerald-700 dark:text-emerald-300",
      borderColor: "border-emerald-200 dark:border-emerald-800",
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "Socket.io", "JWT Authentication", "Appwrite"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      textColor: "text-purple-700 dark:text-purple-300",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Cloudinary", "RESTful APIs", "Real-time Communication", "File Storage", "Version Control"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      textColor: "text-orange-700 dark:text-orange-300",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-orange-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-foreground supports-[background-clip:text]:text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Proficient in modern web technologies with hands-on experience in full-stack development and emerging tech
            stacks.
          </p>
        </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`group hover:shadow-2xl transition-all duration-500 ${category.borderColor} border-2 bg-card/50 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 h-full`}
                
                
                
              >
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                        <Badge
                          variant="secondary"
                          className={`text-sm px-3 py-1.5 ${category.bgColor} ${category.textColor} border border-border/30 font-medium cursor-default shadow-sm`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-3xl mx-auto border-2 border-gradient bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-emerald-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-emerald-950/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
            <CardContent className="p-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-foreground bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text supports-[background-clip:text]:text-transparent">
                Always Learning
              </h3>
              <p className="text-muted-foreground text-balance text-lg leading-relaxed">
                Constantly exploring cutting-edge technologies and frameworks. Currently diving deep into cloud
                architectures, DevOps practices, and advanced React patterns to stay ahead in the tech landscape.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
