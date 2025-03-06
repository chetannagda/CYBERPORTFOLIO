"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, type PanInfo } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  credentialUrl: string
  skills: string[]
}

export default function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Google Digital Garage Online Marketing Course",
      issuer: "GOOGLE",
      date: "Oct 2022",
      image: "./GOOGLE_CERTIFICATE.png?height=300&width=400",
      credentialUrl: "https://www.linkedin.com/posts/chetan-nagda_google-digital-garage-online-digital-marketing-activity-6983437450379423746-laVC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3rIqwBgK15QYnqhFJSHhfgTb8Ao7gbnNE",
      skills: ["Online Marketing", "SEO", "SEM", "Social Media Marketing"],
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "Sep 2023",
      image: "./full_stack.png?height=300&width=400",
      credentialUrl: "https://www.linkedin.com/posts/chetan-nagda_im-thrilled-to-share-that-ive-successfully-activity-7109575594182422528-tbvg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3rIqwBgK15QYnqhFJSHhfgTb8Ao7gbnNE",
      skills: ["React", "Node.js", "Express", "MongoDB", "API Development"],
    },
    {
      id: 3,
      title: "SQL",
      issuer: "HackerRank",
      date: "Sep 2023",
      image: "./SQL.png?height=300&width=400",
      credentialUrl: "https://www.linkedin.com/posts/chetan-nagda_hackerrank-activity-7110996431301210113-2XWX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3rIqwBgK15QYnqhFJSHhfgTb8Ao7gbnNE",
      skills: ["SQL", "Database Management"],
    },
    {
      id: 4,
      title: "Introduction To Blockchain",
      issuer: "AWS",
      date: "April 2024",
      image: "./ibc.png?height=300&width=400",
      credentialUrl: "https://www.linkedin.com/posts/chetan-nagda_newly-certified-in-blockchain-fundamentals-activity-7188762279096512512-h0VF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3rIqwBgK15QYnqhFJSHhfgTb8Ao7gbnNE",
      skills: ["Blockchain", "Smart Contracts"],
    },
  ]

  const nextCertification = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certifications.length)
  }

  const prevCertification = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold) {
      nextCertification()
    } else if (info.offset.x > threshold) {
      prevCertification()
    }
    controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
  }

  // Add swipe instructions for mobile
  useEffect(() => {
    const showSwipeInstructions = () => {
      if (window.innerWidth < 768) {
        const instructions = document.getElementById("swipe-instructions")
        if (instructions) {
          instructions.classList.remove("opacity-0")
          setTimeout(() => {
            instructions.classList.add("opacity-0")
          }, 3000)
        }
      }
    }

    showSwipeInstructions()

    // Show instructions again when user taps on the card
    const certCard = document.getElementById("cert-card")
    if (certCard) {
      certCard.addEventListener("click", showSwipeInstructions)
    }

    return () => {
      if (certCard) {
        certCard.removeEventListener("click", showSwipeInstructions)
      }
    }
  }, [])

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-orbitron text-glow mb-2">
            <span className="text-blue-500">Data</span> Vault Access
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Secured credentials and certifications stored in the holographic vault.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12">
          {/* Certification Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative mb-16 md:mb-0"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              {/* Holographic Frame */}
              <div className="absolute inset-0 border-2 border-blue-500/50 rounded-lg box-glow" />

              {/* Swipe Instructions for Mobile */}
              <div
                id="swipe-instructions"
                className="absolute top-0 left-0 right-0 bg-blue-500/80 text-white text-center py-2 rounded-t-lg z-30 transition-opacity duration-500 opacity-0 md:hidden"
              >
                Swipe left or right to navigate
              </div>

              <div ref={constraintsRef} className="absolute inset-0 overflow-hidden">
                {/* Certification Card */}
                <motion.div
                  id="cert-card"
                  key={certifications[activeIndex].id}
                  drag="x"
                  dragConstraints={constraintsRef}
                  onDragEnd={handleDragEnd}
                  animate={controls}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-muted/50 backdrop-blur-sm rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
                >
                  <div className="absolute inset-0 scanline opacity-20" />

                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-orbitron text-blue-500 truncate max-w-[80%]">
                        {certifications[activeIndex].title}
                      </h3>
                      <Award className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    </div>

                    <div className="flex-1 flex items-center justify-center p-4">
                      <div className="relative w-full max-w-xs aspect-[4/3] mx-auto">
                        <img
                          src={certifications[activeIndex].image || "/placeholder.svg"}
                          alt={certifications[activeIndex].title}
                          className="w-full h-full object-cover rounded-md"
                        />

                        {/* Scan Effect */}
                        <motion.div
                          className="absolute inset-0 bg-blue-500/20"
                          animate={{
                            top: ["0%", "100%", "0%"],
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-foreground/70 mb-2">
                        <span className="truncate mr-2">Issuer: {certifications[activeIndex].issuer}</span>
                        <span className="truncate">Date: {certifications[activeIndex].date}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {certifications[activeIndex].skills.map((skill, index) => (
                          <span key={index} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <a
                        href={certifications[activeIndex].credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-500 hover:text-blue-400 text-sm font-orbitron bg-blue-500/10 px-4 py-2 rounded-md transition-colors hover:bg-blue-500/20 box-glow"
                      >
                        <span className="mr-2">View Credentials</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-4">
                <button
                  onClick={prevCertification}
                  className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                >
                  &lt;
                </button>

                <div className="flex space-x-2">
                  {certifications.map((cert, index) => (
                    <button
                      key={cert.id}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-blue-500/30"}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCertification}
                  className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                >
                  &gt;
                </button>
              </div>
            </div>
          </motion.div>

          {/* Vault Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow">
              <h3 className="text-xl font-orbitron mb-4 text-glow">
                <span className="text-blue-500">&lt;</span> Credentials Database{" "}
                <span className="text-blue-500">/&gt;</span>
              </h3>

              <p className="text-foreground/90 mb-4">
                Access the secure vault containing verified credentials and certifications. Each digital certificate is
                encrypted and stored with blockchain verification.
              </p>

              <p className="text-foreground/90">
                The holographic interface allows for detailed inspection of each credential, including issuer
                information, date of acquisition, and associated skills.
              </p>

              <div className="mt-6 p-4 bg-background/50 rounded-md border border-blue-500/20">
                <h4 className="text-sm font-orbitron text-blue-500 mb-2">Vault Security Protocol</h4>
                <ul className="text-sm space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Blockchain verification for authenticity
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Encrypted storage with multi-factor authentication
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Direct links to issuing authorities
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Regular updates and renewal tracking
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow">
              <h3 className="text-xl font-orbitron mb-4 text-glow">
                <span className="text-blue-500">&lt;</span> Skill Verification{" "}
                <span className="text-blue-500">/&gt;</span>
              </h3>

              <p className="text-foreground/90">
                Each certification validates specific skills and knowledge areas, contributing to a comprehensive
                expertise profile. Hover over any certification to scan its contents and verify authenticity.
              </p>

              <div className="mt-4 flex items-center justify-center">
                <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500"
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

