import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, MapPin, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            I'm a passionate Computer Science student at IIIT Sricity with expertise in full-stack development.
            Currently interning at
            {" "}
            <a href="https://soundverse.ai" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/50 underline-offset-4 hover:decoration-primary">
              SoundVerse.ai
            </a>
            {" "}
            and leading tech initiatives at my college.
          </p>
        </div>

  <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-primary/5 hover:from-primary/10 hover:to-primary/20 border border-border h-full">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Education</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="p-4 rounded-lg bg-background/80 border border-border/50">
                  <p className="font-semibold text-foreground text-base">Indian Institute Of Information Technology</p>
                  <p className="text-blue-600 font-medium">B.Tech in Computer Science and Engineering</p>
                  <p className="font-medium text-foreground">CGPA: 8.95 | Batch 2027</p>
                  <p className="flex items-center justify-center gap-1 mt-2 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    Sricity, Andhra Pradesh
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-secondary/5 hover:from-secondary/10 hover:to-secondary/20 border border-border h-full">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">High School</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="p-4 rounded-lg bg-background/80 border border-border/50">
                  <p className="font-semibold text-foreground text-base">Glenhill School</p>
                  <p className="text-orange-500 font-medium">Class 12th: 95.8%</p>
                  <p className="text-orange-500 font-medium">Class 10th: 94.4%</p>
                  <p className="flex items-center justify-center gap-1 mt-2 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    Varanasi, Uttar Pradesh
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-accent/5 hover:from-accent/10 hover:to-accent/20 border border-border h-full">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Achievements</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-medium">
                  <span>•</span> CGPA 8.95 in B.Tech
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 font-medium">
                  <span>•</span> 95.8% in Class 12th
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-purple-50 border border-purple-200 text-purple-700 font-medium">
                  <span>•</span>
                  <a href="https://soundverse.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    SoundVerse.ai
                  </a>
                  {" "}Intern
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-medium">
                  <span>•</span> Web Dev Lead at IOTA
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
