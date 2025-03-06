"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState<number | null>(null)

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "UnifyTap",
      location: "Udaipur, IND",
      period: "Present",
      description: [
        "Developing Innvative website For Company's Client",
        "Developed Company's itself Website",
        "Handle all the Database and Backend of the Company , also handle the Server",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-orbitron text-glow-purple mb-2">
            <span className="text-purple-500">Professional</span> Timeline
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Chronological record of professional missions and deployments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-purple-500/30" />

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } w-full md:w-1/2`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "left-0 md:right-0 md:left-auto md:-mr-3" : "left-0 md:-ml-3"
                } w-6 h-6 rounded-full bg-purple-500 box-glow-purple z-10`}
                onMouseEnter={() => setActiveExperience(experience.id)}
                onMouseLeave={() => setActiveExperience(null)}
              />

              {/* Experience Card */}
              <div
                className={`relative ml-8 md:ml-0 ${
                  activeExperience === experience.id ? "box-glow-purple" : ""
                } bg-muted/50 border border-purple-500/30 rounded-lg p-6 transition-all duration-300`}
              >
                <div className="flex flex-col">
                  <h3 className="text-xl font-orbitron text-purple-500 mb-1">{experience.title}</h3>

                  <div className="flex items-center text-foreground/80 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{experience.company}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-foreground/90 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decrypt Animation */}
                {activeExperience === experience.id && (
                  <motion.div
                    className="absolute inset-0 bg-purple-500/10 rounded-lg pointer-events-none"
                    animate={{
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Easter Egg Access Code */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-muted/50 border border-purple-500/30 rounded-md px-4 py-2">
            <p className="text-sm font-mono text-purple-400">
              <span className="text-green-400">&gt;</span> Hidden logs available. Enter access code to decrypt.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

