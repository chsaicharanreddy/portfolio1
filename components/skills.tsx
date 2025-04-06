"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Server, Settings, Terminal, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Skills() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-8 w-8 mb-2 text-primary" />,
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
      description: "Programming languages I'm proficient in",
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-8 w-8 mb-2 text-primary" />,
      skills: ["React", "Next.js", "Vue.js", "Express", "Django", "Tailwind CSS"],
      description: "Frameworks I use to build applications",
    },
    {
      title: "Tools",
      icon: <Terminal className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Docker", "Webpack", "npm/yarn"],
      description: "Development tools I work with daily",
    },
    {
      title: "Design",
      icon: <Palette className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"],
      description: "Design tools and principles I follow",
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"],
      description: "Backend technologies I'm experienced with",
    },
    {
      title: "DevOps",
      icon: <Settings className="h-8 w-8 mb-2 text-primary" />,
      skills: ["CI/CD", "AWS", "Vercel", "Netlify", "Docker", "Kubernetes"],
      description: "Deployment and infrastructure tools I use",
    },
  ]

  const handleFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies and tools I work with
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => handleFlip(index)}
              className="cursor-pointer perspective"
            >
              <motion.div
                className="relative preserve-3d duration-500"
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <Card className="overflow-hidden backface-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-muted-foreground">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card className="overflow-hidden backface-hidden absolute inset-0 rotateY-180">
                  <CardContent className="p-6 h-full flex flex-col justify-center">
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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

