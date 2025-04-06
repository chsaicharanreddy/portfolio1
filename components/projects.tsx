"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured online store built with Next.js and Stripe integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      doi: "10.1234/example.1234",
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects with team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      doi: "10.1234/example.5678",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data for any location.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "OpenWeather API", "CSS3"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      doi: "10.1234/example.9012",
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and publishing blog posts.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Sanity.io", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for tracking social media performance across multiple platforms.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Chart.js", "Firebase"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      doi: "10.1234/example.3456",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="perspective"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="relative preserve-3d duration-500 h-full"
                animate={{ rotateY: hoveredCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <Card className="overflow-hidden backface-hidden h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      width={500}
                      height={300}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card className="overflow-hidden backface-hidden absolute inset-0 rotateY-180 h-full">
                  <CardContent className="p-6 h-full flex flex-col justify-center">
                    <div className="flex flex-col items-center text-center h-full justify-center space-y-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-4">
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            <Github className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                            Code
                          </Button>
                        </Link>
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="group relative overflow-hidden">
                            <span className="relative z-10">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
                          </Button>
                        </Link>
                      </div>
                      {project.doi && (
                        <div className="mt-2">
                          <span className="text-xs text-muted-foreground">DOI: {project.doi}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

