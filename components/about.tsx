"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function About() {
  const [isFlipped, setIsFlipped] = useState<number | null>(null)

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Git",
    "UI/UX",
  ]

  const handleFlip = (index: number) => {
    setIsFlipped(isFlipped === index ? null : index)
  }

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about me and my background
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative aspect-video overflow-hidden rounded-xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="About me"
                className="object-cover"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Who am I?</h3>
              <p className="text-muted-foreground">
                I'm a passionate web developer with a strong focus on creating user-friendly and visually appealing
                websites. With several years of experience in the industry, I've had the opportunity to work on a
                variety of projects that have helped me refine my skills and expand my knowledge.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities. I believe in continuous learning and staying updated with the latest
                trends in web development.
              </p>
              <div className="flex flex-wrap gap-2 py-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer"
                    onClick={() => handleFlip(index)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      animate={{ rotateY: isFlipped === index ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {skill}
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 px-3 py-1 rounded-full bg-orange-500/20 text-orange-600 text-sm font-medium flex items-center justify-center"
                      initial={{ rotateY: 180 }}
                      animate={{ rotateY: isFlipped === index ? 0 : 180 }}
                      transition={{ duration: 0.6 }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {`${3 + index} years`}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-start">
                <Button className="mt-4 relative overflow-hidden group">
                  <span className="relative z-10">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

