// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { ExternalLink, Github } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface Project {
//   id: number
//   title: string
//   description: string
//   image: string
//   technologies: string[]
//   demoUrl: string
//   githubUrl: string
//   featured: boolean
// }

// export default function ProjectsSection() {
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null)

//   const projects: Project[] = [
//     {
//       id: 1,
//       title: "Hotel Website",
//       description:
//         "An admin dashboard for Hotel and Booking processing.",
//       image: "./hotel3.png?height=400&width=600",
//       technologies: ["React", "Express", "MongoDB"],
//       demoUrl: "https://chetannagda.github.io/HOTEL3.0/",
//       githubUrl: "https://github.com/chetannagda/HOTEL3.0",
//       featured: true,
//     },
//     {
//       id: 2,
//       title: "QR Code Generator",
//       description:
//         "A Website where user can generate unlimited QR codes in different styles and design with custom colorsand and No expiry .",
//       image: "./QRCG.png?height=400&width=600",
//       technologies: ["React", "Node.js", "MongoDB", "Express"],
//       demoUrl: "https://qrcode-psi.vercel.app/",
//       githubUrl: "https://github.com/chetannagda/QR2.0",
//       featured: true,
//     },
//     {
//       id: 3,
//       title: "Full Stack website",
//       description:
//         "Created a Website for a Buisness of NFC Cards.",
//       image: "./uft.png?height=400&width=600",
//       technologies: ["TypeScript", "React", "Node.js"],
//       demoUrl: "https://unifytap.com/",
//       githubUrl: "#",
//       featured: true,
//     },
//     {
//       id: 4,
//       title: "Placement Roadmap Website",
//       description: "An interactive roadmap for Myself to land a Good Placement.",
//       image: "./roadmap.png?height=400&width=600",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       demoUrl: "https://chetannagda.github.io/PlacementPathByChetan/",
//       githubUrl: "https://github.com/chetannagda/PlacementPathByChetan",
//       featured: true,
//     },
//     {
//       id: 5,
//       title: "Property Listing Website (Working)",
//       description:
//         "A full-stack application for property listings with user authentication, property search, and booking functionality.",
//       image: "./?height=400&width=600",
//       technologies: ["React", "Express", "MongoDB"],
//       demoUrl: "#",
//       githubUrl: "#",
//       featured: false,
//     },
//     {
//       id: 6,
//       title: "Web Cam Access Application",
//       description: "A secure webcam monitoring application with motion detection, notifications, and cloud storage for footage.",
//       image: "/placeholder.svg?height=400&width=600",
//       technologies: ["JavaScript", "Flutter", "Node.js", "AWS S3"],
//       demoUrl: "#",
//       githubUrl: "#",
//       featured: false,
//     },
//   ]

//   const featuredProjects = projects.filter((project) => project.featured)
//   const otherProjects = projects.filter((project) => !project.featured)

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold font-orbitron text-glow-green mb-2">
//             <span className="text-green-500">Mission</span> Logs
//           </h2>
//           <p className="text-foreground/70 max-w-2xl mx-auto">
//             Explore the holographic archives of completed projects and missions.
//           </p>
//         </motion.div>

//         {/* Featured Projects */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           {featuredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="relative group"
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <div className="relative overflow-hidden rounded-lg border border-green-500/30 box-glow-green">
//                 {/* Project Image */}
//                 <div className="relative h-64 overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
//                   <img
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* Holographic Overlay */}
//                   <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
//                     <div className="absolute inset-0 scanline opacity-30" />
//                   </div>
//                 </div>

//                 {/* Project Info */}
//                 <div className="p-6 bg-muted/80 backdrop-blur-sm relative z-30">
//                   <h3 className="text-xl font-orbitron text-glow-green mb-2 line-clamp-1">{project.title}</h3>

//                   <p className="text-foreground/80 mb-4 line-clamp-3">{project.description}</p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span key={techIndex} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex flex-wrap gap-3">
//                     <Button variant="neonGreen" size="sm" className="font-orbitron">
//                       <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="font-orbitron text-green-500 border-green-500/50 hover:bg-green-500/10"
//                     >
//                       <Github className="mr-2 h-4 w-4" /> GitHub
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Other Projects */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mb-8"
//         >
//           <h3 className="text-xl font-orbitron text-glow-green mb-6">
//             <span className="text-green-500">&lt;</span> Other Missions <span className="text-green-500">/&gt;</span>
//           </h3>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {otherProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-muted/50 border border-green-500/30 rounded-lg p-6 hover:box-glow-green transition-all duration-300"
//             >
//               <h4 className="text-lg font-orbitron text-green-500 mb-2 line-clamp-1">{project.title}</h4>

//               <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech, techIndex) => (
//                   <span key={techIndex} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex space-x-3">
//                 <a
//                   href={project.demoUrl}
//                   className="text-green-500 hover:text-green-400 text-sm flex items-center bg-green-500/10 px-3 py-1 rounded-md hover:bg-green-500/20 transition-colors"
//                 >
//                   <ExternalLink className="mr-1 h-3 w-3" /> Demo
//                 </a>
//                 <a
//                   href={project.githubUrl}
//                   className="text-green-500 hover:text-green-400 text-sm flex items-center bg-green-500/10 px-3 py-1 rounded-md hover:bg-green-500/20 transition-colors"
//                 >
//                   <Github className="mr-1 h-3 w-3" /> Code
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Hotel Website",
      description:
        "An admin dashboard for Hotel and Booking processing.",
      image: "./hotel3.png?height=400&width=600",
      technologies: ["React", "Express", "MongoDB"],
      demoUrl: "https://chetannagda.github.io/HOTEL3.0/",
      githubUrl: "https://github.com/chetannagda/HOTEL3.0",
      featured: true,
    },
    {
      id: 2,
      title: "QR Code Generator",
      description:
        "A Website where user can generate unlimited QR codes in different styles and design with custom colorsand and No expiry .",
      image: "./QRCG.png?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demoUrl: "https://qrcode-psi.vercel.app/",
      githubUrl: "https://github.com/chetannagda/QR2.0",
      featured: true,
    },
    {
      id: 3,
      title: "Full Stack website",
      description:
        "Created a Website for a Buisness of NFC Cards.",
      image: "./uft.png?height=400&width=600",
      technologies: ["TypeScript", "React", "Node.js"],
      demoUrl: "https://unifytap.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Placement Roadmap Website",
      description: "An interactive roadmap for Myself to land a Good Placement.",
      image: "./roadmap.png?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://chetannagda.github.io/PlacementPathByChetan/",
      githubUrl: "https://github.com/chetannagda/PlacementPathByChetan",
      featured: true,
    },
    {
      id: 5,
      title: "Property Listing Website (Working)",
      description:
        "A full-stack application for property listings with user authentication, property search, and booking functionality.",
      image: "./?height=400&width=600",
      technologies: ["React", "Express", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Web Cam Access Application",
      description: "A secure webcam monitoring application with motion detection, notifications, and cloud storage for footage.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["JavaScript", "Flutter", "Node.js", "AWS S3"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-orbitron text-glow-green mb-2">
            <span className="text-green-500">Mission</span> Logs
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore the holographic archives of completed projects and missions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg border border-green-500/30 box-glow-green">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="absolute inset-0 scanline opacity-30" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 bg-muted/80 backdrop-blur-sm relative z-30">
                  <h3 className="text-xl font-orbitron text-glow-green mb-2 line-clamp-1">{project.title}</h3>

                  <p className="text-foreground/80 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-neonGreen hover:bg-neonGreen-dark focus:outline-none focus:border-neonGreen-dark focus:shadow-outline-neonGreen active:bg-neonGreen transition duration-150 ease-in-out"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-green-500 bg-transparent hover:bg-green-500/10 focus:outline-none focus:border-green-500/50 focus:shadow-outline-green active:bg-green-500/10 transition duration-150 ease-in-out"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-xl font-orbitron text-glow-green mb-6">
            <span className="text-green-500">&lt;</span> Other Missions <span className="text-green-500">/&gt;</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/50 border border-green-500/30 rounded-lg p-6 hover:box-glow-green transition-all duration-300"
            >
              <h4 className="text-lg font-orbitron text-green-500 mb-2 line-clamp-1">{project.title}</h4>

              <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 text-sm flex items-center bg-green-500/10 px-3 py-1 rounded-md hover:bg-green-500/20 transition-colors"
                >
                  <ExternalLink className="mr-1 h-3 w-3" /> Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 text-sm flex items-center bg-green-500/10 px-3 py-1 rounded-md hover:bg-green-500/20 transition-colors"
                >
                  <Github className="mr-1 h-3 w-3" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}