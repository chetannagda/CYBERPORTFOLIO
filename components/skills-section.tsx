// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Code, Database, Server, Globe, Cpu, GitBranch, Layers, Cloud, LineChart } from "lucide-react"

// interface Skill {
//   name: string
//   icon: React.ReactNode
//   level: number
//   category: string
//   description: string
// }

// export default function SkillsSection() {
//   const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)

//   const skills: Skill[] = [
//     {
//       name: "React.js",
//       icon: <Code className="h-6 w-6" />,
//       level: 90,
//       category: "Frontend",
//       description: "Building interactive UIs with React hooks, context API, and state management",
//     },
//     {
//       name: "Next.js",
//       icon: <Globe className="h-6 w-6" />,
//       level: 85,
//       category: "Frontend",
//       description: "Server-side rendering, static site generation, and API routes",
//     },
//     {
//       name: "JavaScript",
//       icon: <Code className="h-6 w-6" />,
//       level: 80,
//       category: "Frontend",
//       description: "JavaScript development with interfaces and generics",
//     },
//     {
//       name: "TypeScript",
//       icon: <Code className="h-6 w-6" />,
//       level: 80,
//       category: "Frontend",
//       description: "Type-safe JavaScript development with interfaces and generics",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: <Code className="h-6 w-6" />,
//       level: 95,
//       category: "Frontend",
//       description: "Utility-first CSS framework for rapid UI development",
//     },
//     {
//       name: "Node.js",
//       icon: <Server className="h-6 w-6" />,
//       level: 85,
//       category: "Backend",
//       description: "Server-side JavaScript runtime for building scalable applications",
//     },
//     {
//       name: "Express.js",
//       icon: <Server className="h-6 w-6" />,
//       level: 80,
//       category: "Backend",
//       description: "Web application framework for Node.js with middleware support",
//     },
//     {
//       name: "Java Spring Boot",
//       icon: <Server className="h-6 w-6" />,
//       level: 85,
//       category: "Backend",
//       description: "Java Backend for Network and Server Side Development",
//     },
//     {
//       name: "MongoDB",
//       icon: <Database className="h-6 w-6" />,
//       level: 75,
//       category: "Database",
//       description: "NoSQL database for flexible, schema-less data storage",
//     },
//     {
//       name: "MySQL",
//       icon: <Database className="h-6 w-6" />,
//       level: 80,
//       category: "Database",
//       description: "SQL database for Relational Database",
//     },
//     {
//       name: "PostgreSQL",
//       icon: <Database className="h-6 w-6" />,
//       level: 70,
//       category: "Database",
//       description: "Powerful, open-source object-relational database system",
//     },
//     {
//       name: "Firebase",
//       icon: <Cloud className="h-6 w-6" />,
//       level: 85,
//       category: "Database",
//       description: "Platform for building web and mobile applications without server-side code",
//     },
//     {
//       name: "Docker",
//       icon: <Layers className="h-6 w-6" />,
//       level: 75,
//       category: "DevOps",
//       description: "Containerization platform for consistent development environments",
//     },
//     {
//       name: "AWS",
//       icon: <Layers className="h-6 w-6" />,
//       level: 75,
//       category: "DevOps",
//       description: "All the AWS Services",
//     },
//     {
//       name: "Ansible",
//       icon: <Layers className="h-6 w-6" />,
//       level: 80,
//       category: "DevOps",
//       description: "Automation tool for configuration management and application deployment",
//     },
//     {
//       name: "CI/CD",
//       icon: <Layers className="h-6 w-6" />,
//       level: 65,
//       category: "DevOps",
//       description: "Continuous Integration and Continuous Deployment",
//     },
//     {
//       name: "Kubernetes",
//       icon: <Layers className="h-6 w-6" />,
//       level: 65,
//       category: "DevOps",
//       description: "Container orchestration platform for automating deployment, scaling, and management",
//     },
//     {
//       name: "GitHub Actions",
//       icon: <GitBranch className="h-6 w-6" />,
//       level: 80,
//       category: "DevOps",
//       description: "CI/CD workflows integrated with GitHub repositories",
//     },
//     {
//       name: "Java",
//       icon: <Cpu className="h-6 w-6" />,
//       level: 90,
//       category: "Programming",
//       description: "Object-oriented programming with strong typing and platform independence",
//     },
//     {
//       name: "Python",
//       icon: <Cpu className="h-6 w-6" />,
//       level: 75,
//       category: "Programming",
//       description: "Versatile language for web development, data analysis, and automation",
//     },
//     {
//       name: "Data Structures",
//       icon: <LineChart className="h-6 w-6" />,
//       level: 90,
//       category: "Computer Science",
//       description: "Arrays, linked lists, trees, graphs, and algorithm optimization",
//     },
//     {
//       name: "System Design",
//       icon: <Cpu className="h-6 w-6" />,
//       level: 80,
//       category: "Computer Science",
//       description: "Designing scalable, reliable, and maintainable software systems",
//     },
//     {
//       name: "OOPs",
//       icon: <Cpu className="h-6 w-6" />,
//       level: 85,
//       category: "Computer Science",
//       description: "",
//     },
//     {
//       name: "OPERATING sYSTEM",
//       icon: <Cpu className="h-6 w-6" />,
//       level: 90,
//       category: "Computer Science",
//       description: "Operating System Concepts",
//     },
//     {
//       name: "Computer Networks",
//       icon: <Cpu className="h-6 w-6" />,
//       level: 80,
//       category: "Computer Science",
//       description: "Computer Networks Concepts",
//     },
//     {
//       name: "Database Management System",
//       icon: <Cpu className="h-6 w-6" />,
//       level: 90,
//       category: "Computer Science",
//       description: "Database Management System Concepts",
//     },
//   ]

//   const categories = Array.from(new Set(skills.map((skill) => skill.category)))

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold font-orbitron text-glow mb-2">
//             <span className="text-blue-500">System</span> Modules
//           </h2>
//           <p className="text-foreground/70 max-w-2xl mx-auto">
//             Core technologies and frameworks powering the development process.
//           </p>
//         </motion.div>

//         <div className="space-y-12">
//           {categories.map((category, categoryIndex) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <h3 className="text-xl font-orbitron text-glow mb-4">
//                 <span className="text-blue-500">&lt;</span> {category} <span className="text-blue-500">/&gt;</span>
//               </h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {skills
//                   .filter((skill) => skill.category === category)
//                   .map((skill, index) => (
//                     <motion.div
//                       key={skill.name}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3, delay: index * 0.05 }}
//                       viewport={{ once: true }}
//                       whileHover={{
//                         scale: 1.05,
//                         boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
//                       }}
//                       onHoverStart={() => setHoveredSkill(skill)}
//                       onHoverEnd={() => setHoveredSkill(null)}
//                       className="bg-muted/50 border border-blue-500/30 rounded-lg p-4 relative overflow-hidden group"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                       <div className="flex items-center mb-3">
//                         <div className="text-blue-500 mr-3">{skill.icon}</div>
//                         <h4 className="font-orbitron text-lg truncate">{skill.name}</h4>
//                       </div>

//                       <div className="w-full bg-background/50 rounded-full h-2.5 mb-2">
//                         <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }} />
//                       </div>

//                       <div className="text-xs text-foreground/70">Proficiency: {skill.level}%</div>

//                       {/* Blueprint overlay on hover */}
//                       <div className="absolute inset-0 bg-blue-950/80 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <div className="text-sm text-blue-200">{skill.description}</div>
//                       </div>
//                     </motion.div>
//                   ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 3D Floating Grid Visualization */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-20 h-[300px] relative rounded-lg overflow-hidden border border-blue-500/30 box-glow"
//         >
//           <div className="absolute inset-0 cyber-grid" />

//           {/* This would be replaced with a proper 3D visualization using Three.js in a real implementation */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <h3 className="text-xl font-orbitron text-glow mb-4">
//                 <span className="text-blue-500">3D</span> Skill Visualization
//               </h3>
//               <p className="text-foreground/70 max-w-md mx-auto">
//                 Interactive 3D visualization of technology stack and skill relationships.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// import type React from "react"
// import { motion } from "framer-motion"

// interface Skill {
//   name: string
//   logo: string
//   category: string
// }

// export default function SkillsSection() {
//   const skills: Skill[] = [
//     {
//       name: "React.js",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//       category: "Frontend",
//     },
//     {
//       name: "Next.js",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//       category: "Frontend",
//     },
//     {
//       name: "JavaScript",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//       category: "Frontend",
//     },
//     {
//       name: "TypeScript",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//       category: "Frontend",
//     },
//     {
//       name: "Tailwind CSS",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
//       category: "Frontend",
//     },
//     {
//       name: "Node.js",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//       category: "Backend",
//     },
//     {
//       name: "Express.js",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//       category: "Backend",
//     },
//     {
//       name: "Java Spring Boot",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
//       category: "Backend",
//     },
//     {
//       name: "MongoDB",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//       category: "Database",
//     },
//     {
//       name: "MySQL",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//       category: "Database",
//     },
//     {
//       name: "PostgreSQL",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//       category: "Database",
//     },
//     {
//       name: "Firebase",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
//       category: "Database",
//     },
//     {
//       name: "Docker",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//       category: "DevOps",
//     },
//     {
//       name: "AWS",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
//       category: "DevOps",
//     },
//     {
//       name: "Ansible",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
//       category: "DevOps",
//     },
//     {
//       name: "CI/CD",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
//       category: "DevOps",
//     },
//     {
//       name: "Kubernetes",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
//       category: "DevOps",
//     },
//     {
//       name: "GitHub Actions",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//       category: "DevOps",
//     },
//     {
//       name: "Java",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//       category: "Programming",
//     },
//     {
//       name: "Python",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//       category: "Programming",
//     },
//     {
//       name: "Data Structures",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg",
//       category: "Computer Science",
//     },
//     {
//       name: "System Design",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
//       category: "Computer Science",
//     },
//     {
//       name: "OOPs",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
//       category: "Computer Science",
//     },
//     {
//       name: "Operating System",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
//       category: "Computer Science",
//     },
//     {
//       name: "Computer Networks",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
//       category: "Computer Science",
//     },
//     {
//       name: "Database Management System",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
//       category: "Computer Science",
//     },
//   ]

//   const categories = Array.from(new Set(skills.map((skill) => skill.category)))

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold font-orbitron text-glow mb-2">
//             <span className="text-blue-500">System</span> Modules
//           </h2>
//           <p className="text-foreground/70 max-w-2xl mx-auto">
//             Core technologies and frameworks powering the development process.
//           </p>
//         </motion.div>

//         <div className="space-y-12">
//           {categories.map((category, categoryIndex) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <h3 className="text-xl font-orbitron text-glow mb-4">
//                 <span className="text-blue-500">&lt;</span> {category} <span className="text-blue-500">/&gt;</span>
//               </h3>

//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//                 {skills
//                   .filter((skill) => skill.category === category)
//                   .map((skill, index) => (
//                     <motion.div
//                       key={skill.name}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3, delay: index * 0.05 }}
//                       viewport={{ once: true }}
//                       className="bg-muted/50 border border-blue-500/30 rounded-lg p-4 relative overflow-hidden aspect-square flex items-center justify-center"
//                     >
//                       <div className="relative z-10">
//                         <img 
//                           src={skill.logo} 
//                           alt={skill.name} 
//                           className="w-12 h-12 object-contain" 
//                         />
//                       </div>
//                     </motion.div>
//                   ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 3D Floating Grid Visualization */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-20 h-[300px] relative rounded-lg overflow-hidden border border-blue-500/30 box-glow"
//         >
//           <div className="absolute inset-0 cyber-grid" />

//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <h3 className="text-xl font-orbitron text-glow mb-4">
//                 <span className="text-blue-500">3D</span> Skill Visualization
//               </h3>
//               <p className="text-foreground/70 max-w-md mx-auto">
//                 Interactive 3D visualization of technology stack and skill relationships.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }




import type React from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  logo: string
  category: string
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "React.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      category: "Frontend",
    },
    {
      name: "Next.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      category: "Frontend",
    },
    {
      name: "Node.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      category: "Backend",
    },
    {
      name: "Express.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      category: "Backend",
    },
    {
      name: "Java Spring Boot",
      logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      category: "Backend",
    },
    {
      name: "MongoDB",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      category: "Database",
    },
    {
      name: "MySQL",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      category: "Database",
    },
    {
      name: "PostgreSQL",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      category: "Database",
    },
    {
      name: "Firebase",
      logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      category: "Database",
    },
    {
      name: "Docker",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      category: "DevOps",
    },
    {
      name: "AWS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      category: "DevOps",
    },
    {
      name: "Ansible",
      logo: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg",
      category: "DevOps",
    },
    {
      name: "Jenkins",
      logo: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
      category: "DevOps",
    },
    {
      name: "Kubernetes",
      logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      category: "DevOps",
    },
    {
      name: "GitHub Actions",
      logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      category: "DevOps",
    },
    {
      name: "Java",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      category: "Programming",
    },
    {
      name: "Python",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      category: "Programming",
    },
    {
      name: "Data Structures",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      category: "Computer Science",
    },
    {
      name: "System Design",
      logo: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
      category: "Computer Science",
    },
    {
      name: "OOP",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      category: "Computer Science",
    },
    {
      name: "Operating System",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      category: "Computer Science",
    },
    {
      name: "Computer Networks",
      logo: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg",
      category: "Computer Science",
    },
    {
      name: "Database Management",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
      category: "Computer Science",
    },
  ]

  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-blue-500">System</span> Modules
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Core technologies and frameworks powering the development process.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl mb-4">
                <span className="text-blue-500">&lt;</span> {category} <span className="text-blue-500">/&gt;</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-gray-800 border border-blue-500/30 rounded-lg p-4 relative overflow-hidden aspect-square flex flex-col items-center justify-center group hover:border-blue-500 transition-colors"
                    >
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" 
                        />
                        <span className="text-xs text-center text-gray-400 group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Floating Grid Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 h-[300px] relative rounded-lg overflow-hidden border border-blue-500/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl mb-4">
                <span className="text-blue-500">3D</span> Skill Visualization
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Interactive 3D visualization of technology stack and skill relationships.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
