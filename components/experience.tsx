"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      logo: "/placeholder.svg?height=50&width=50",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
      type: "work",
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      logo: "/placeholder.svg?height=50&width=50",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple client websites. Collaborated with designers to implement responsive UI components and improved site performance.",
      type: "work",
    },
    {
      title: "Master's in Computer Science",
      company: "University of Technology",
      logo: "/placeholder.svg?height=50&width=50",
      period: "2016 - 2018",
      description:
        "Specialized in Web Technologies and Human-Computer Interaction. Thesis on optimizing web performance for mobile devices.",
      type: "education",
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Hub",
      logo: "/placeholder.svg?height=50&width=50",
      period: "2015 - 2018",
      description:
        "Worked on frontend development for early-stage startups. Built responsive websites using HTML, CSS, and JavaScript.",
      type: "work",
    },
    {
      title: "Bachelor's in Computer Science",
      company: "State University",
      logo: "/placeholder.svg?height=50&width=50",
      period: "2011 - 2015",
      description: "Focused on software development fundamentals and web technologies. Graduated with honors.",
      type: "education",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and academic background
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-3xl py-12">
          <div className="relative border-l border-primary/30 pl-6 ml-6 md:ml-0">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                className="mb-10 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border border-primary bg-background flex items-center justify-center">
                  {item.type === "work" ? (
                    <Briefcase className="h-3 w-3 text-primary" />
                  ) : (
                    <GraduationCap className="h-3 w-3 text-primary" />
                  )}
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={item.company}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="md:hidden h-5 w-5 rounded-md overflow-hidden bg-muted flex items-center justify-center mr-2">
                        <img
                          src={item.logo || "/placeholder.svg"}
                          alt={item.company}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-primary font-medium">{item.company}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

