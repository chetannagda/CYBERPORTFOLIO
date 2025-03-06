// "use client"

// import { useEffect, useRef } from "react"
// import { motion } from "framer-motion"

// export default function HolographicAvatar() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     // Set canvas dimensions
//     canvas.width = 300
//     canvas.height = 300

//     // Create holographic avatar
//     const avatar = new Image()
//     avatar.crossOrigin = "anonymous"
//     avatar.src = "./397683-PD4HYF-195.jpg?height=300&width=300"

//     // Variables for animation
//     let hue = 0
//     let frame = 0
//     const maxParticles = 50
//     const particles: { x: number; y: number; size: number; speed: number }[] = []

//     // Create initial particles
//     for (let i = 0; i < maxParticles; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 3 + 1,
//         speed: Math.random() * 1 + 0.5,
//       })
//     }

//     // Animation function
//     function animate() {
//       // Clear canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       // Draw avatar with glitch effect
//       if (avatar.complete) {
//         if (frame % 20 === 0) {
//           // Occasional glitch effect
//           const glitchX = Math.random() * 10 - 5
//           const glitchY = Math.random() * 10 - 5
//           ctx.drawImage(avatar, glitchX, glitchY, canvas.width, canvas.height)

//           // Add color overlay with changing hue
//           ctx.globalCompositeOperation = "overlay"
//           ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.2)`
//           ctx.fillRect(0, 0, canvas.width, canvas.height)
//           ctx.globalCompositeOperation = "source-over"
//         } else {
//           // Normal drawing
//           ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height)

//           // Add color overlay with changing hue
//           ctx.globalCompositeOperation = "overlay"
//           ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.1)`
//           ctx.fillRect(0, 0, canvas.width, canvas.height)
//           ctx.globalCompositeOperation = "source-over"
//         }
//       }

//       // Draw holographic particles
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i]

//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
//         ctx.fillStyle = `hsla(${hue}, 100%, 70%, 0.8)`
//         ctx.fill()

//         // Move particles upward
//         p.y -= p.speed

//         // Reset particles that go off screen
//         if (p.y < 0) {
//           p.y = canvas.height
//           p.x = Math.random() * canvas.width
//         }
//       }

//       // Add scanlines
//       for (let i = 0; i < canvas.height; i += 4) {
//         ctx.fillStyle = "rgba(0, 150, 255, 0.1)"
//         ctx.fillRect(0, i, canvas.width, 1)
//       }

//       // Update variables
//       hue = (hue + 0.5) % 360
//       frame++

//       // Continue animation
//       requestAnimationFrame(animate)
//     }

//     // Start animation when image is loaded
//     avatar.onload = () => {
//       animate()
//     }

//     return () => {
//       // Cleanup
//     }
//   }, [])

//   return (
//     <motion.div
//       className="relative"
//       animate={{
//         y: [0, -10, 0],
//       }}
//       transition={{
//         repeat: Number.POSITIVE_INFINITY,
//         duration: 4,
//         ease: "easeInOut",
//       }}
//     >
//       <div className="relative w-[300px] h-[300px] max-w-full mx-auto">
//         <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
//         <canvas
//           ref={canvasRef}
//           className="relative z-10 rounded-full border-2 border-blue-500/50 box-glow max-w-full"
//           width={300}
//           height={300}
//         />

//         {/* Holographic elements */}
//         <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/20" />
//         </div>
//       </div>
//     </motion.div>
//   )
// }

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HolographicAvatar() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 300;

    // Create holographic avatar
    const avatar = new Image();
    avatar.crossOrigin = "anonymous";
    avatar.src = "/397683-PD4HYF-195.jpg"; // Ensure this file is in the `public` folder

    // Variables for animation
    let hue = 0;
    let frame = 0;
    const maxParticles = 50;
    const particles: { x: number; y: number; size: number; speed: number }[] = [];

    // Create initial particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
      });
    }

    // Animation function
    function animate() {
      if (!canvas || !ctx) return; // Double check if canvas and context exist

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw avatar with glitch effect
      if (avatar.complete) {
        if (frame % 20 === 0) {
          // Occasional glitch effect
          const glitchX = Math.random() * 10 - 5;
          const glitchY = Math.random() * 10 - 5;
          ctx.drawImage(avatar, glitchX, glitchY, canvas.width, canvas.height);
        } else {
          ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
        }

        // Add color overlay with changing hue
        ctx.globalCompositeOperation = "overlay";
        ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.1)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
      }

      // Draw holographic particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 100%, 70%, 0.8)`;
        ctx.fill();

        // Move particles upward
        p.y -= p.speed;

        // Reset particles that go off screen
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });

      // Add scanlines
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.fillStyle = "rgba(0, 150, 255, 0.1)";
        ctx.fillRect(0, i, canvas.width, 1);
      }

      // Update variables
      hue = (hue + 0.5) % 360;
      frame++;

      // Continue animation
      requestAnimationFrame(animate);
    }

    // Start animation when image is loaded
    avatar.onload = () => {
      animate();
    };

    return () => {
      // Cleanup to prevent memory leaks
      avatar.onload = null;
    };
  }, []);

  return (
    <motion.div
      className="relative"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-[300px] h-[300px] max-w-full mx-auto">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
        <canvas
          ref={canvasRef}
          className="relative z-10 rounded-full border-2 border-blue-500/50 box-glow max-w-full"
          width={300}
          height={300}
        />

        {/* Holographic elements */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/20" />
        </div>
      </div>
    </motion.div>
  );
}
