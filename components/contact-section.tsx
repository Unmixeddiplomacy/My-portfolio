"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    const mailtoLink = `mailto:sinhaashutosh2003@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sinhaashutosh2003@gmail.com",
      href: "mailto:sinhaashutosh2003@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91) 9129673640",
      href: "tel:+919129673640",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIIT Sricity, Andhra Pradesh",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Unmixeddiplomacy",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashutosh-sinha-a9119928a",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-primary rounded-full animate-float-enhanced"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 border-2 border-secondary rounded-full animate-float-enhanced"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-accent rounded-full animate-float-enhanced"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-foreground supports-[background-clip:text]:text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out!
          </p>
        </div>

  <div className="grid lg:grid-cols-2 gap-12 items-stretch content-stretch">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-background/50 to-muted/30 hover:from-primary/5 hover:to-secondary/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      asChild
                      className="btn-enhanced flex-1 border-2 hover:border-primary hover:bg-primary/5 bg-transparent"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <social.icon className="h-5 w-5" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Send className="h-5 w-5 text-white" />
                </div>
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                    className="border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-enhanced bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
