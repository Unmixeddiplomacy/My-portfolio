"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function ResumeReferencesSection() {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume/Ashutosh_Sinha_Resume.pdf"
    link.download = "Ashutosh_Sinha_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleRequestReferences = () => {
    const el = document.getElementById("contact")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.hash = "#contact"
    }
  }

  return (
    <section id="resume-references" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Resume &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-foreground supports-[background-clip:text]:text-transparent">
              References
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Download my complete resume and connect with my professional references.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-border">
              <CardHeader className="text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
                >
                  <FileText className="h-10 w-10 text-white" />
                </motion.div>
                <CardTitle className="text-2xl font-bold">Resume</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground text-balance leading-relaxed">
                  Download my comprehensive resume with detailed information about my education, experience, projects,
                  and skills.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={handleResumeDownload}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card className="bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-border">
              <CardHeader className="text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-orange-500 flex items-center justify-center shadow-lg"
                >
                  <ExternalLink className="h-10 w-10 text-white" />
                </motion.div>
                <CardTitle className="text-2xl font-bold">References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center text-balance leading-relaxed">
                  Professional references are available upon request. Please reach out and I’ll be happy to share
                  contact details of mentors, project leads, or supervisors relevant to your inquiry.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleRequestReferences}
                    className="w-full border-2 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-orange-50 dark:hover:from-emerald-950/20 dark:hover:to-orange-950/20 bg-transparent"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Request References
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
