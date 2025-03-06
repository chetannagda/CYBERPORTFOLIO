"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import HolographicAvatar from "@/components/holographic-avatar"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("WELCOME, I AM CHETAN NAGDA")
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  const roles = ["Full-Stack Developer", "DevOps Enthusiast", "Java & DSA Specialist", "App Developer"]

  // Typing effect for the main text
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index])
        setIndex((prevIndex) => prevIndex + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Role cycling effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(roleInterval)
  }, [])

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width - 0.5
        const y = (e.clientY - top) / height - 0.5
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20 md:pt-0"
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(16, 42, 66, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />

      <div className="container mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Avatar appears first on mobile */}
          <div className="w-full md:w-1/2 flex justify-center md:order-2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              style={{
                transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
              }}
              className="max-w-full"
            >
              <HolographicAvatar />
            </motion.div>
          </div>

          {/* Text content appears second on mobile */}
          <div className="w-full md:w-1/2 text-center md:text-left md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-block bg-blue-950/50 border border-blue-500/30 rounded-md px-4 py-2 mb-4 max-w-full overflow-hidden">
                <p className="text-sm font-mono text-blue-400 whitespace-normal break-words md:truncate">
                  <span className="text-green-400">&gt;</span> INITIATE PORTFOLIO |{" "}
                  <span className="text-glow">{text}</span>
                  {showCursor && <span className="terminal-cursor"></span>}
                </p>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-orbitron mb-4 text-glow">
                Developer's<span className="text-blue-500">Portfolio</span>
              </h1>

              <div className="h-12 overflow-hidden">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl font-orbitron text-glow-green"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a href="./CHETAN_NAGDA_RESUME.pdf" download>
                <Button variant="neon" size="lg" className="font-orbitron">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="neonGreen" size="lg" className="font-orbitron">
                  <Send className="mr-2 h-4 w-4" /> Initiate Contact
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

