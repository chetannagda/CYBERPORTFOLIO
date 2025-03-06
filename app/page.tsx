"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import AiAssistant from "@/components/ai-assistant"

export default function Home() {
  const [dataStreams, setDataStreams] = useState<{ left: string; duration: string }[]>([])
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  useEffect(() => {
    // Create random data streams
    const streams = []
    for (let i = 0; i < 20; i++) {
      streams.push({
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 10 + 5}s`,
      })
    }
    setDataStreams(streams)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background data streams */}
      <div className="fixed inset-0 z-0 cyber-grid opacity-20">
        {dataStreams.map((stream, index) => (
          <div
            key={index}
            className="data-stream"
            style={{
              left: stream.left,
              animationDuration: stream.duration,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Scanline effect */}
      <div className="fixed inset-0 z-10 pointer-events-none scanline opacity-10" />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="relative z-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
      </div>

      {/* Scroll indicator */}
      <motion.div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30" style={{ opacity }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-foreground/70 mb-2 font-orbitron">Scroll to Explore</span>
          <ChevronDown className="h-6 w-6 text-blue-500 text-glow" />
        </motion.div>
      </motion.div>

      {/* AI Assistant */}
      <AiAssistant />
    </main>
  )
}

