// "use client"

// import type React from "react"

// import { useState, useRef, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Send, X, Cpu, User, Maximize, Minimize } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface Message {
//   id: string
//   text: string
//   sender: "user" | "ai"
//   timestamp: Date
// }

// export default function AiAssistant() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isMinimized, setIsMinimized] = useState(false)
//   const [message, setMessage] = useState("")
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       text: "Hello! I'm your AI assistant. How can I help you today?",
//       sender: "ai",
//       timestamp: new Date(),
//     },
//   ])
//   const [isTyping, setIsTyping] = useState(false)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   // Predefined responses for common questions
//   const responses: Record<string, string> = {
//     hello: "Hello! How can I assist you today?",
//     hi: "Hi there! What can I help you with?",
//     "who are you": "I'm an AI assistant designed to help with questions about this portfolio.",
//     "what can you do":
//       "I can answer questions about the portfolio owner's skills, projects, and experience. I can also help schedule meetings or provide contact information.",
//     contact:
//       "You can contact the portfolio owner via email at contact@example.com or through the contact form on this website.",
//     skills:
//       "The portfolio owner is skilled in full-stack development, including React, Next.js, Node.js, and various databases. They also have experience with DevOps tools like Docker and Kubernetes.",
//     projects:
//       "The portfolio showcases several projects including a Property Listing Website, Collaborative Study Planner, Webcam App, and Placement Roadmap Website. Would you like more details about any specific project?",
//     experience:
//       "The portfolio owner has experience as a Senior Full Stack Developer at TechNova Solutions, Full Stack Developer at DataSphere Inc., Software Engineer at InnoTech Systems, and Junior Developer at WebCraft Studios.",
//     education:
//       "The portfolio owner has a degree in Computer Science and Engineering and has completed several certifications in AWS, Full Stack Development, Machine Learning, and Java Programming.",
//     resume: "You can download the resume using the 'Download Resume' button in the hero section of this portfolio.",
//     "thank you": "You're welcome! Is there anything else I can help you with?",
//     thanks: "You're welcome! Is there anything else I can help you with?",
//     bye: "Goodbye! Feel free to return if you have more questions.",
//     help: "I can answer questions about skills, projects, experience, or contact information. Just ask me what you'd like to know!",
//   }

//   // Function to get AI response
//   const getAIResponse = (userMessage: string): string => {
//     const lowerCaseMessage = userMessage.toLowerCase()

//     // Check for exact matches first
//     if (responses[lowerCaseMessage]) {
//       return responses[lowerCaseMessage]
//     }

//     // Check for partial matches
//     for (const [key, response] of Object.entries(responses)) {
//       if (lowerCaseMessage.includes(key)) {
//         return response
//       }
//     }

//     // Default response if no match found
//     return "I'm not sure I understand. Could you rephrase your question? You can ask me about skills, projects, experience, or contact information."
//   }

//   // Scroll to bottom of messages
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   // Add event listener to open the AI Assistant from external components
//   useEffect(() => {
//     const handleOpenAiAssistant = () => {
//       setIsOpen(true)
//       if (isMinimized) setIsMinimized(false)
//     }

//     window.addEventListener("openAiAssistant", handleOpenAiAssistant)

//     return () => {
//       window.removeEventListener("openAiAssistant", handleOpenAiAssistant)
//     }
//   }, [isMinimized])

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!message.trim()) return

//     // Add user message
//     const userMessage: Message = {
//       id: Date.now().toString(),
//       text: message,
//       sender: "user",
//       timestamp: new Date(),
//     }

//     setMessages((prev) => [...prev, userMessage])
//     setMessage("")
//     setIsTyping(true)

//     // Simulate AI thinking and typing
//     setTimeout(
//       () => {
//         const aiResponse: Message = {
//           id: (Date.now() + 1).toString(),
//           text: getAIResponse(userMessage.text),
//           sender: "ai",
//           timestamp: new Date(),
//         }

//         setMessages((prev) => [...prev, aiResponse])
//         setIsTyping(false)
//       },
//       1000 + Math.random() * 1000,
//     ) // Random delay between 1-2 seconds
//   }

//   const toggleChat = () => {
//     setIsOpen((prev) => !prev)
//     if (isMinimized) setIsMinimized(false)
//   }

//   const toggleMinimize = (e: React.MouseEvent) => {
//     e.stopPropagation()
//     setIsMinimized((prev) => !prev)
//   }

//   return (
//     <>
//       {/* Chat Button */}
//       <motion.button
//         id="ai-assistant"
//         onClick={toggleChat}
//         className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg z-50 hover:bg-blue-600 transition-colors box-glow"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Cpu className="h-6 w-6" />
//       </motion.button>

//       {/* Chat Window */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: 20, scale: 0.9 }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             height: isMinimized ? "60px" : "500px",
//           }}
//           transition={{ duration: 0.3 }}
//           className="fixed bottom-24 right-6 w-80 md:w-96 bg-background border border-blue-500/30 rounded-lg shadow-xl z-50 overflow-hidden box-glow"
//         >
//           {/* Chat Header */}
//           <div className="bg-blue-500/20 p-3 flex items-center justify-between border-b border-blue-500/30">
//             <div className="flex items-center">
//               <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mr-3">
//                 <Cpu className="h-4 w-4 text-blue-500" />
//               </div>
//               <div>
//                 <h3 className="text-sm font-orbitron text-blue-500">AI Assistant</h3>
//                 <div className="flex items-center">
//                   <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
//                   <span className="text-xs text-foreground/70">Online</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <button onClick={toggleMinimize} className="text-foreground/70 hover:text-blue-500 transition-colors">
//                 {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
//               </button>
//               <button onClick={toggleChat} className="text-foreground/70 hover:text-blue-500 transition-colors">
//                 <X className="h-4 w-4" />
//               </button>
//             </div>
//           </div>

//           {!isMinimized && (
//             <>
//               {/* Chat Messages */}
//               <div className="p-4 h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
//                 {messages.map((msg) => (
//                   <div key={msg.id} className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
//                     <div
//                       className={`max-w-[80%] rounded-lg p-3 ${
//                         msg.sender === "user" ? "bg-blue-500 text-white" : "bg-muted border border-blue-500/20"
//                       }`}
//                     >
//                       <div className="flex items-center mb-1">
//                         {msg.sender === "ai" ? (
//                           <Cpu className="h-3 w-3 mr-2 text-blue-500" />
//                         ) : (
//                           <User className="h-3 w-3 mr-2" />
//                         )}
//                         <span className="text-xs opacity-70">{msg.sender === "ai" ? "AI Assistant" : "You"}</span>
//                       </div>
//                       <p className="text-sm">{msg.text}</p>
//                       <div className="text-right mt-1">
//                         <span className="text-xs opacity-50">
//                           {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//                 {isTyping && (
//                   <div className="flex justify-start mb-4">
//                     <div className="max-w-[80%] rounded-lg p-3 bg-muted border border-blue-500/20">
//                       <div className="flex items-center mb-1">
//                         <Cpu className="h-3 w-3 mr-2 text-blue-500" />
//                         <span className="text-xs opacity-70">AI Assistant</span>
//                       </div>
//                       <div className="flex space-x-1">
//                         <div
//                           className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
//                           style={{ animationDelay: "0ms" }}
//                         ></div>
//                         <div
//                           className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
//                           style={{ animationDelay: "300ms" }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Chat Input */}
//               <form onSubmit={handleSendMessage} className="p-3 border-t border-blue-500/30 bg-muted/30">
//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Type your message..."
//                     className="flex-1 bg-background/50 border border-blue-500/30 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   />
//                   <Button
//                     type="submit"
//                     variant="neon"
//                     size="sm"
//                     className="rounded-l-none"
//                     disabled={isTyping || !message.trim()}
//                   >
//                     <Send className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </form>
//             </>
//           )}
//         </motion.div>
//       )}
//     </>
//   )
// }

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, X, Cpu, User, Maximize, Minimize } from "lucide-react"
import { Button } from "@/components/ui/button"

// Update the Message interface to support React nodes
interface Message {
  id: string
  text: string | React.ReactNode
  sender: "user" | "ai"
  timestamp: Date
}

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Update the responses object to include enhanced resume and contact responses
  const responses: Record<string, string | React.ReactNode> = {
    hello: "Hello! How can I assist you today?",
    hi: "Hi there! What can I help you with?",
    "who are you": "I'm an AI assistant designed to help with questions about this portfolio.",
    "what can you do":
      "I can answer questions about the portfolio owner's skills, projects, and experience. I can also help schedule meetings or provide contact information.",
    contact: (
      <div className="space-y-3">
        <p>Here are the ways you can get in touch:</p>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <a
            href="https://wa.me/916367426746"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-green-500/20 hover:bg-green-500/30 text-green-500 p-2 rounded-md transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M9 13.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
            </svg>
            <span className="text-xs">WhatsApp</span>
          </a>
          <a
            href="tel:+916367426746"
            className="flex flex-col items-center justify-center bg-blue-500/20 hover:bg-blue-500/30 text-blue-500 p-2 rounded-md transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-xs">Call</span>
          </a>
          <a
            href="mailto:chetan23rd@gmail.com"
            className="flex flex-col items-center justify-center bg-red-500/20 hover:bg-red-500/30 text-red-500 p-2 rounded-md transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-xs">Email</span>
          </a>
        </div>
      </div>
    ),
    resume: (
      <div className="space-y-3">
        <p>Here's my resume for download:</p>
        <div className="bg-background/80 border border-blue-500/30 rounded-md p-3 mt-2">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500/20 rounded-md flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">ChetanNagda_Resume.pdf</div>
              <div className="text-xs text-foreground/60">PDF Document • 75 KB</div>
            </div>
            <a
              href="./CHETAN_NAGDA_RESUME.pdf"
              download
              className="ml-2 w-8 h-8 bg-blue-500/20 hover:bg-blue-500/40 rounded-full flex items-center justify-center text-blue-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    ),
    skills:
      "The portfolio owner is skilled in full-stack development, including React, Next.js, Node.js, and various databases. They also have experience with DevOps tools like Docker and Kubernetes.",
    projects:
      "The portfolio showcases several projects including a Property Listing Website, Collaborative Study Planner, Webcam App, and Placement Roadmap Website. Would you like more details about any specific project?",
    experience:
      "The portfolio owner has experience as a Senior Full Stack Developer at TechNova Solutions, Full Stack Developer at DataSphere Inc., Software Engineer at InnoTech Systems, and Junior Developer at WebCraft Studios.",
    education:
      "The portfolio owner has a degree in Computer Science and Engineering and has completed several certifications in AWS, Full Stack Development, Machine Learning, and Java Programming.",
    "thank you": "You're welcome! Is there anything else I can help you with?",
    thanks: "You're welcome! Is there anything else I can help you with?",
    bye: "Goodbye! Feel free to return if you have more questions.",
    help: "I can answer questions about skills, projects, experience, or contact information. Just ask me what you'd like to know!",
  }

  // Update the getAIResponse function to handle case-insensitive matching for resume and contact
  const getAIResponse = (userMessage: string): string | React.ReactNode => {
    const lowerCaseMessage = userMessage.toLowerCase()

    // Special handling for resume and contact keywords
    if (lowerCaseMessage === "resume" || lowerCaseMessage === "cv") {
      return responses.resume
    }

    if (lowerCaseMessage === "contact" || lowerCaseMessage === "contacts") {
      return responses.contact
    }

    // Check for exact matches first
    if (responses[lowerCaseMessage]) {
      return responses[lowerCaseMessage]
    }

    // Check for partial matches
    for (const [key, response] of Object.entries(responses)) {
      if (lowerCaseMessage.includes(key)) {
        return response
      }
    }

    // Default response if no match found
    return "I'm not sure I understand. Could you rephrase your question? You can ask me about skills, projects, experience, or contact information."
  }

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Add event listener to open the AI Assistant from external components
  useEffect(() => {
    const handleOpenAiAssistant = () => {
      setIsOpen(true)
      if (isMinimized) setIsMinimized(false)
    }

    window.addEventListener("openAiAssistant", handleOpenAiAssistant)

    return () => {
      window.removeEventListener("openAiAssistant", handleOpenAiAssistant)
    }
  }, [isMinimized])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")
    setIsTyping(true)

    // Simulate AI thinking and typing
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getAIResponse(userMessage.text),
          sender: "ai",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
    if (isMinimized) setIsMinimized(false)
  }

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMinimized((prev) => !prev)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        id="ai-assistant"
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg z-50 hover:bg-blue-600 transition-colors box-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Cpu className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            height: isMinimized ? "60px" : "500px",
          }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 w-80 md:w-96 bg-background border border-blue-500/30 rounded-lg shadow-xl z-50 overflow-hidden box-glow"
        >
          {/* Chat Header */}
          <div className="bg-blue-500/20 p-3 flex items-center justify-between border-b border-blue-500/30">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center mr-3">
                <Cpu className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <h3 className="text-sm font-orbitron text-blue-500">AI Assistant</h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-xs text-foreground/70">Online</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button onClick={toggleMinimize} className="text-foreground/70 hover:text-blue-500 transition-colors">
                {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
              </button>
              <button onClick={toggleChat} className="text-foreground/70 hover:text-blue-500 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="p-4 h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
                {messages.map((msg) => (
                  <div key={msg.id} className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "user" ? "bg-blue-500 text-white" : "bg-muted border border-blue-500/20"
                      }`}
                    >
                      <div className="flex items-center mb-1">
                        {msg.sender === "ai" ? (
                          <Cpu className="h-3 w-3 mr-2 text-blue-500" />
                        ) : (
                          <User className="h-3 w-3 mr-2" />
                        )}
                        <span className="text-xs opacity-70">{msg.sender === "ai" ? "AI Assistant" : "You"}</span>
                      </div>
                      <p className="text-sm">{msg.text}</p>
                      <div className="text-right mt-1">
                        <span className="text-xs opacity-50">
                          {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="max-w-[80%] rounded-lg p-3 bg-muted border border-blue-500/20">
                      <div className="flex items-center mb-1">
                        <Cpu className="h-3 w-3 mr-2 text-blue-500" />
                        <span className="text-xs opacity-70">AI Assistant</span>
                      </div>
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-blue-500/30 bg-muted/30">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-background/50 border border-blue-500/30 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <Button
                    type="submit"
                    variant="neon"
                    size="sm"
                    className="rounded-l-none"
                    disabled={isTyping || !message.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      )}
    </>
  )
}

