"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Heart, Code2, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export function PersonalStatementSection() {
  return (
    <section id="personal-statement" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-orange-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Personal{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-foreground supports-[background-clip:text]:text-transparent">
              Statement
            </span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Card className="bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm shadow-2xl border border-border">
            <CardContent className="p-12">
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Quote className="h-8 w-8 text-white" />
                </motion.div>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p className="text-balance">
                    As a passionate Computer Science student at IIIT Sricity, I believe in the transformative power of
                    technology to solve real-world problems. My journey in full-stack development has been driven by
                    curiosity and a desire to create meaningful digital experiences.
                  </p>
                  <p className="text-balance">
                    Through my projects like ChatApp and MegaBlog, I've learned that great software isn't just about
                    clean code—it's about understanding user needs and crafting solutions that make a difference. My
                    leadership roles have taught me the importance of collaboration and mentoring others in their tech
                    journey.
                  </p>
                  <p className="text-balance">
                    I'm excited about the future of web development, particularly in areas like real-time applications,
                    cloud computing, and AI integration. My goal is to contribute to innovative projects that push the
                    boundaries of what's possible in technology.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"
                >
                  <Heart className="h-8 w-8 mx-auto mb-3 text-red-500" />
                  <h3 className="font-semibold mb-2">Passion</h3>
                  <p className="text-sm text-muted-foreground">Driven by love for creating impactful solutions</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-blue-50/50 dark:from-emerald-950/20 dark:to-blue-950/20"
                >
                  <Code2 className="h-8 w-8 mx-auto mb-3 text-emerald-500" />
                  <h3 className="font-semibold mb-2">Craftsmanship</h3>
                  <p className="text-sm text-muted-foreground">Committed to writing clean, maintainable code</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/20 dark:to-yellow-950/20"
                >
                  <Lightbulb className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Always exploring new technologies and approaches</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
