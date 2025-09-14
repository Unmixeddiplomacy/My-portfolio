"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Star, Users } from "lucide-react"
import { motion } from "framer-motion"

export function AchievementsSection() {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained CGPA of 8.95 in Computer Science Engineering",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
      textColor: "text-yellow-700 dark:text-yellow-300",
    },
    {
      title: "Leadership Role",
      description: "Web Dev Lead at IOTA Projects Club, leading technical initiatives",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      textColor: "text-blue-700 dark:text-blue-300",
    },
    {
      title: "Club Leadership",
      description: "Lead at Nirvana Club IIITS, organizing events and activities",
      icon: Star,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      textColor: "text-purple-700 dark:text-purple-300",
    },
    {
      title: "Industry Recognition",
      description: (
        <>
          Selected for Full-Stack Internship at{' '}
          <a href="https://soundverse.ai" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/50 underline-offset-4 hover:decoration-primary">
            SoundVerse.ai
          </a>
        </>
      ),
      icon: Award,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      textColor: "text-emerald-700 dark:text-emerald-300",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-purple-600 to-emerald-600 bg-clip-text text-foreground supports-[background-clip:text]:text-transparent">
              Awards
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Recognition for academic excellence, leadership, and technical contributions in various domains.
          </p>
        </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 border border-border h-full">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
                  >
                    <achievement.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-balance leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
