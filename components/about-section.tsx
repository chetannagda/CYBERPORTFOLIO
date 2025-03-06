"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

export default function AboutSection() {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to the Neural Database. Type a command to continue...",
    "Available commands: show_skills, list_projects, initiate_contact",
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    // Add command to output
    setOutput((prev) => [...prev, `> ${command}`])

    // Process command
    switch (command.toLowerCase()) {
      case "show_skills":
        setIsTyping(true)
        setTimeout(() => {
          setOutput((prev) => [
            ...prev,
            "Frontend: React.js, Next.js, Flutter , TypeScript, Tailwind CSS, HTML, CSS",
            "Backend: Node.js, Express.js, Java Spring Boot",
            "Database: MongoDB, PostgreSQL, Firebase, MySQL",
            "DevOps: Linux, Docker, Kubernetes, GitHub Actions, AWS, CI/CD, Ansible, Apache Kafka",
            "Other: Data Structures & Algorithms, System Design, NO CODE, LOW CODE",
          ])
          setIsTyping(false)
        }, 500)
        break
      case "list_projects":
        setIsTyping(true)
        setTimeout(() => {
          setOutput((prev) => [
            ...prev,
            "1. Property Listing Website (Next.js, MongoDB, Expree.js, Tailwind CSS, Node.js, Firebase(For Authentication))",
            "2. Ticket Booking Website (HTML , CSS , JavaScript, Firebase)",
            "3. Webcam App for Remote Monitoring(Flutter , Node.js , Express.js , MongoDB)",
            "4. Placement Roadmap Website",
            "5. Hotel Website (React.js)",
            "5. Chat Application (React.js, Node.js, Express.js, Socket.io)",
            "6. Portfolio Website (Three.js)",
          ])
          setIsTyping(false)
        }, 500)
        break
      case "initiate_contact":
        setIsTyping(true)
        setTimeout(() => {
          setOutput((prev) => [
            ...prev,
            "Contact initiated. Scroll to the Contact section or email at: chetan23rd@gmail.com",
          ])
          setIsTyping(false)
        }, 500)
        break
      case "clear":
        setOutput([
          "Terminal cleared. Type a command to continue...",
          "Available commands: show_skills, list_projects, initiate_contact",
        ])
        break
      default:
        setOutput((prev) => [
          ...prev,
          `Command not recognized: ${command}`,
          "Available commands: show_skills, list_projects, initiate_contact, clear",
        ])
    }

    // Clear command input
    setCommand("")
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-orbitron text-glow-purple mb-2">
            <span className="text-purple-500">Neural</span> Database
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Access the core system files to learn more about the developer behind this interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-muted/50 border border-purple-500/30 rounded-lg p-6 box-glow-purple">
              <h3 className="text-xl font-orbitron mb-4 text-glow-purple">
                <span className="text-purple-500">&lt;</span> About Me <span className="text-purple-500">/&gt;</span>
              </h3>

              <div className="space-y-4">
                <p className="text-foreground/90">
                  I'm a passionate Computer Science and Engineering professional with expertise in full-stack
                  development, DevOps, and system architecture.
                </p>
                <p className="text-foreground/90">
                  With a strong foundation in data structures and algorithms, I build scalable, efficient solutions that
                  solve real-world problems.
                </p>
                <p className="text-foreground/90">
                  My mission is to create innovative digital experiences that combine cutting-edge technology with
                  intuitive design.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 border border-purple-500/30 rounded-lg p-6 box-glow-purple">
              <h3 className="text-xl font-orbitron mb-4 text-glow-purple">
                <span className="text-purple-500">&lt;</span> Core Stats <span className="text-purple-500">/&gt;</span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/50 p-4 rounded-md border border-purple-500/20">
                  <div className="text-sm text-foreground/70">Age</div>
                  <div className="text-2xl font-orbitron text-purple-500">20 Years</div>
                </div>
                <div className="bg-background/50 p-4 rounded-md border border-purple-500/20">
                  <div className="text-sm text-foreground/70">Projects</div>
                  <div className="text-2xl font-orbitron text-purple-500">8+</div>
                </div>
                <div className="bg-background/50 p-4 rounded-md border border-purple-500/20">
                  <div className="text-sm text-foreground/70">Paid Projects</div>
                  <div className="text-2xl font-orbitron text-purple-500">4+</div>
                </div>
                <div className="bg-background/50 p-4 rounded-md border border-purple-500/20">
                  <div className="text-sm text-foreground/70">Technologies</div>
                  <div className="text-2xl font-orbitron text-purple-500">12+</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-muted/50 border border-purple-500/30 rounded-lg p-6 box-glow-purple h-auto md:h-[500px] flex flex-col"
          >
            <div className="flex items-center mb-4">
              <Terminal className="h-5 w-5 text-purple-500 mr-2" />
              <h3 className="text-xl font-orbitron text-glow-purple">Command Console</h3>
            </div>

            <div className="flex-1 bg-background/80 rounded-md p-4 font-mono text-sm overflow-y-auto mb-4 h-[300px] md:h-auto">
              {output.map((line, index) => (
                <div key={index} className={line.startsWith(">") ? "text-purple-500" : "text-foreground/90"}>
                  {line}
                </div>
              ))}
              {isTyping && (
                <div className="text-foreground/90">
                  <span className="inline-block w-3 h-4 bg-purple-500 animate-pulse"></span>
                </div>
              )}
            </div>

            <form onSubmit={handleCommand} className="flex">
              <span className="text-purple-500 mr-2">{">"}</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
                placeholder="Type a command..."
                autoComplete="off"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

