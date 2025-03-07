// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Send, Github, Linkedin, Mail, Twitter } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function ContactSection() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [aiAssistantOpen, setAiAssistantOpen] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormState((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSubmitted(true)
//       setFormState({ name: "", email: "", message: "" })

//       // Reset submission status after 3 seconds
//       setTimeout(() => {
//         setIsSubmitted(false)
//       }, 3000)
//     }, 1500)
//   }

//   // Add this function to handle opening the AI Assistant
//   const openAiAssistant = () => {
//     // Set a global variable to tell the AI Assistant to open
//     if (typeof window !== "undefined") {
//       window.dispatchEvent(new CustomEvent("openAiAssistant"))
//     }
//     setAiAssistantOpen(true)
//   }

//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold font-orbitron text-glow mb-2">
//             <span className="text-blue-500">Signal</span> Transmission
//           </h2>
//           <p className="text-foreground/70 max-w-2xl mx-auto">
//             Establish a secure communication channel to discuss projects and collaborations.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           {/* Contact Form - Always appears last on mobile */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow order-2 md:order-1"
//           >
//             <h3 className="text-xl font-orbitron mb-6 text-glow">
//               <span className="text-blue-500">&lt;</span> Transmission Panel{" "}
//               <span className="text-blue-500">/&gt;</span>
//             </h3>

//             {isSubmitted ? (
//               <div className="text-center py-8">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-500 mb-4">
//                   <Send className="h-8 w-8" />
//                 </div>
//                 <h4 className="text-xl font-orbitron text-blue-500 mb-2">Signal Transmitted!</h4>
//                 <p className="text-foreground/70">
//                   Your message has been successfully sent. Expect a response within 24-48 hours.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <div className="flex items-center text-sm text-blue-500 font-mono mb-1">
//                     <span className="mr-2">&gt;</span>
//                     <label htmlFor="name">Enter Name</label>
//                   </div>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formState.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-background/50 border border-blue-500/30 rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                     placeholder="Chetan Nagda"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex items-center text-sm text-blue-500 font-mono mb-1">
//                     <span className="mr-2">&gt;</span>
//                     <label htmlFor="email">Enter Email</label>
//                   </div>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formState.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-background/50 border border-blue-500/30 rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                     placeholder="chetan23rd@gmail.com"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex items-center text-sm text-blue-500 font-mono mb-1">
//                     <span className="mr-2">&gt;</span>
//                     <label htmlFor="message">Message</label>
//                   </div>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formState.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full bg-background/50 border border-blue-500/30 rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                     placeholder="Enter your message here..."
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   variant="neon"
//                   className="w-full font-orbitron hover:box-glow transition-all duration-300"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <span className="mr-2">Transmitting Signal</span>
//                       <span className="inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
//                     </>
//                   ) : (
//                     <>
//                       <Send className="mr-2 h-4 w-4" /> Transmit Signal
//                     </>
//                   )}
//                 </Button>
//               </form>
//             )}
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="space-y-6 order-1 md:order-2"
//           >
//             <div className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow">
//               <h3 className="text-xl font-orbitron mb-4 text-glow">
//                 <span className="text-blue-500">&lt;</span> Direct Channels <span className="text-blue-500">/&gt;</span>
//               </h3>

//               <div className="space-y-4">
//                 <a
//                   href="mailto:chetan23rd@gmail.com"
//                   className="flex items-center hover:bg-blue-500/10 p-2 rounded-md transition-colors"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
//                     <Mail className="h-5 w-5 text-blue-500" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-foreground/70">Email</div>
//                     <div className="text-blue-500 hover:text-blue-400">Contact Me</div>
//                   </div>
//                 </a>

//                 <a
//                   href="https://linkedin.com/in/chetannagdaa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center hover:bg-blue-500/10 p-2 rounded-md transition-colors"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
//                     <Linkedin className="h-5 w-5 text-blue-500" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-foreground/70">LinkedIn</div>
//                     <div className="text-blue-500 hover:text-blue-400">Connect with me</div>
//                   </div>
//                 </a>

//                 <a
//                   href="https://github.com/chetannagda"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center hover:bg-blue-500/10 p-2 rounded-md transition-colors"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
//                     <Github className="h-5 w-5 text-blue-500" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-foreground/70">GitHub</div>
//                     <div className="text-blue-500 hover:text-blue-400">View my projects</div>
//                   </div>
//                 </a>

//                 <a
//                   href="https://instagram.com/chetannagdaa"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center hover:bg-blue-500/10 p-2 rounded-md transition-colors"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-5 w-5 text-blue-500"
//                     >
//                       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                     </svg>
//                   </div>
//                   <div>
//                     <div className="text-sm text-foreground/70">Instagram</div>
//                     <div className="text-blue-500 hover:text-blue-400">Follow me</div>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             <div className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow">
//               <h3 className="text-xl font-orbitron mb-4 text-glow">
//                 <span className="text-blue-500">&lt;</span> Response Time <span className="text-blue-500">/&gt;</span>
//               </h3>

//               <div className="space-y-4">
//                 <p className="text-foreground/90">
//                   All transmissions are monitored and will receive a response within 24-48 hours. Priority signals may
//                   receive faster responses.
//                 </p>

//                 <div className="bg-background/50 rounded-md p-4 border border-blue-500/20">
//                   <h4 className="text-sm font-orbitron text-blue-500 mb-2">Signal Status</h4>
//                   <div className="flex items-center">
//                     <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
//                     <span className="text-green-500 text-sm">Online - Ready to Receive</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between text-sm text-foreground/70">
//                   <span>Current Response Rate:</span>
//                   <span className="text-blue-500">98.7%</span>
//                 </div>

//                 <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
//                   <div className="h-full bg-blue-500 w-[98.7%]"></div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow">
//               <h3 className="text-xl font-orbitron mb-4 text-glow">
//                 <span className="text-blue-500">&lt;</span> AI Assistant <span className="text-blue-500">/&gt;</span>
//               </h3>

//               <p className="text-foreground/90 mb-4">
//                 For immediate assistance, you can interact with my AI assistant. It can answer basic questions and
//                 schedule meetings.
//               </p>

//               <Button
//                 variant="neon"
//                 className="w-full font-orbitron hover:box-glow transition-all duration-300"
//                 onClick={openAiAssistant}
//               >
//                 Activate AI Assistant
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-20 border-t border-blue-500/30 pt-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <span className="text-xl font-bold font-orbitron text-glow">
//                 <span className="text-blue-500">&lt;</span>
//                 <span className="text-white">CYBER</span>
//                 <span className="text-blue-500">/&gt;</span>
//               </span>
//             </div>

//             <div className="flex space-x-4">
//               <a href="https://github.com/chetannagda" className="text-foreground/70 hover:text-blue-500 transition-colors">
//                 <Github className="h-5 w-5" />
//                 <span className="sr-only">GitHub</span>
//               </a>
//               <a href="https://linkedin.com/in/chetannagdaa" className="text-foreground/70 hover:text-blue-500 transition-colors">
//                 <Linkedin className="h-5 w-5" />
//                 <span className="sr-only">LinkedIn</span>
//               </a>
//               <a href="mailto:chetan23rd@gmail.com" className="text-foreground/70 hover:text-blue-500 transition-colors">
//                 <Mail className="h-5 w-5" />
//                 <span className="sr-only">Email</span>
//               </a>
//             </div>

//             <div className="mt-4 md:mt-0 text-sm text-foreground/50">
//               Thank You for Visiting my Cyber Portfolio.
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the message for WhatsApp
    const whatsappMessage = `*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Message:* ${formState.message}`

    // Generate WhatsApp API URL
    const whatsappUrl = `https://wa.me/916367426746?text=${whatsappMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  // Add this function to handle opening the AI Assistant
  const openAiAssistant = () => {
    // Set a global variable to tell the AI Assistant to open
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openAiAssistant"))
    }
    setAiAssistantOpen(true)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-orbitron text-glow mb-2">
            <span className="text-blue-500">Signal</span> Transmission
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Establish a secure communication channel to discuss projects and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Form - Always appears last on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow order-2 md:order-1"
          >
            <h3 className="text-xl font-orbitron mb-6 text-glow">
              <span className="text-blue-500">&lt;</span> Transmission Panel{" "}
              <span className="text-blue-500">/&gt;</span>
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-500 mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-orbitron text-blue-500 mb-2">Signal Transmitted!</h4>
                <p className="text-foreground/70">
                  Your message has been sent to WhatsApp. Please complete the sending process there.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-500 font-mono mb-1">
                    <span className="mr-2">&gt;</span>
                    <label htmlFor="name">Enter Name</label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-blue-500/30 rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="Chetan Nagda"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-500 font-mono mb-1">
                    <span className="mr-2">&gt;</span>
                    <label htmlFor="email">Enter Email</label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-blue-500/30 rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="chetan23rd@gmail.com"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-500 font-mono mb-1">
                    <span className="mr-2">&gt;</span>
                    <label htmlFor="message">Message</label>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background/50 border border-blue-500/30 rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="Enter your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="neon"
                  className="w-full font-orbitron hover:box-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Transmitting Signal</span>
                      <span className="inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Transmit Signal
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow">
              <h3 className="text-xl font-orbitron mb-4 text-glow">
                <span className="text-blue-500">&lt;</span> Direct Channels <span className="text-blue-500">/&gt;</span>
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:chetan23rd@gmail.com"
                  className="flex items-center hover:bg-blue-500/10 p-2 rounded-md transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70">Email</div>
                    <div className="text-blue-500 hover:text-blue-400">Contact Me</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/chetannagdaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:bg-blue-500/10 p-2 rounded-md transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70">LinkedIn</div>
                    <div className="text-blue-500 hover:text-blue-400">Connect with me</div>
                  </div>
                </a>

                <a
                  href="https://github.com/chetannagda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:bg-blue-500/10 p-2 rounded-md transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <Github className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70">GitHub</div>
                    <div className="text-blue-500 hover:text-blue-400">View my projects</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/chetannagdaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:bg-blue-500/10 p-2 rounded-md transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-500"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70">Instagram</div>
                    <div className="text-blue-500 hover:text-blue-400">Follow me</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow">
              <h3 className="text-xl font-orbitron mb-4 text-glow">
                <span className="text-blue-500">&lt;</span> Response Time <span className="text-blue-500">/&gt;</span>
              </h3>

              <div className="space-y-4">
                <p className="text-foreground/90">
                  All transmissions are monitored and will receive a response within 24-48 hours. Priority signals may
                  receive faster responses.
                </p>

                <div className="bg-background/50 rounded-md p-4 border border-blue-500/20">
                  <h4 className="text-sm font-orbitron text-blue-500 mb-2">Signal Status</h4>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                    <span className="text-green-500 text-sm">Online - Ready to Receive</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <span>Current Response Rate:</span>
                  <span className="text-blue-500">98.7%</span>
                </div>

                <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[98.7%]"></div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 border border-blue-500/30 rounded-lg p-6 box-glow">
              <h3 className="text-xl font-orbitron mb-4 text-glow">
                <span className="text-blue-500">&lt;</span> AI Assistant <span className="text-blue-500">/&gt;</span>
              </h3>

              <p className="text-foreground/90 mb-4">
                For immediate assistance, you can interact with my AI assistant. It can answer basic questions and
                schedule meetings.
              </p>

              <Button
                variant="neon"
                className="w-full font-orbitron hover:box-glow transition-all duration-300"
                onClick={openAiAssistant}
              >
                Activate AI Assistant
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-blue-500/30 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold font-orbitron text-glow">
                <span className="text-blue-500">&lt;</span>
                <span className="text-white">CYBER</span>
                <span className="text-blue-500">/&gt;</span>
              </span>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/chetannagda"
                className="text-foreground/70 hover:text-blue-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/chetannagdaa"
                className="text-foreground/70 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:chetan23rd@gmail.com"
                className="text-foreground/70 hover:text-blue-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>

            <div className="mt-4 md:mt-0 text-sm text-foreground/50">Thank You for Visiting my Cyber Portfolio.</div>
          </div>
        </div>
      </div>
    </section>
  )
}



