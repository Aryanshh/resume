import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { BRIEF_DESCRIPTION } from 'src/utils/constants'
import FloatingIcons from '@/components/FloatingIcons'

export default function Home() {
  const canvasRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    const particles = []
    const PARTICLE_COUNT = window.innerWidth < 768 ? 100 : 200

    // Color palette
    const COLORS = [
      '#4facfe', // Soft blue
      '#00f2fe', // Cyan
      '#f093fb', // Purple
      '#f5576c', // Pink
      '#43e97b'  // Green
    ]

    class Particle {
      constructor() {
        this.reset()
        this.baseSize = Math.random() * 4 + 2
        this.z = Math.random() * 4 + 1 // 3D depth
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.angle = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        // Mouse interaction
        const dx = mousePos.current.x - this.x
        const dy = mousePos.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Repel from cursor
        if (distance < 150) {
          const force = 150 / (distance + 1)
          this.vx -= dx * force * 0.0005
          this.vy -= dy * force * 0.0005
        }

        // Apply velocity with friction
        this.vx *= 0.98
        this.vy *= 0.98
        this.x += this.vx
        this.y += this.vy

        // Apply 3D perspective
        this.size = this.baseSize / this.z
        this.drawX = this.x / this.z + (canvas.width * (1 - 1/this.z)) / 2
        this.drawY = this.y / this.z + (canvas.height * (1 - 1/this.z)) / 2

        // Rotation
        this.angle += this.rotationSpeed

        // Boundary check
        if (this.drawX < -50 || this.drawX > canvas.width + 50 || 
            this.drawY < -50 || this.drawY > canvas.height + 50) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.drawX, this.drawY)
        ctx.rotate(this.angle)

        // Glow effect
        const gradient = ctx.createRadialGradient(
          0, 0, 0, 
          0, 0, this.size * 3
        )
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, 'rgba(0,0,0,0)')

        // Draw diamond shape
        ctx.beginPath()
        ctx.moveTo(0, -this.size)
        ctx.lineTo(this.size, 0)
        ctx.lineTo(0, this.size)
        ctx.lineTo(-this.size, 0)
        ctx.closePath()

        ctx.fillStyle = gradient
        ctx.fill()
        ctx.restore()
      }
    }

    // Initialize particles
    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle())
      }
    }

    // Animation loop
    const animate = () => {
      // Clear with fading trail
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particles.forEach(p => {
        p.update()
        p.draw()
        
        // Draw connections
        particles.forEach(p2 => {
          if (p !== p2) {
            const dx = p.drawX - p2.drawX
            const dy = p.drawY - p2.drawY
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(p.drawX, p.drawY)
              ctx.lineTo(p2.drawX, p2.drawY)
              ctx.strokeStyle = `${p.color}${Math.floor((1 - distance/100) * 50).toString(16).padStart(2, '0')}`
              ctx.lineWidth = 0.3
              ctx.stroke()
            }
          }
        })
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    init()
    animate()
    window.addEventListener('resize', init)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', init)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Aryanshh Srivastava | Portfolio</title>
        <meta name="description" content={BRIEF_DESCRIPTION} />
        <style>{`
          html, body, #__next {
            overflow: hidden;
            height: 100%;
          }
        `}</style>
      </Head>
      
      {/* Interactive 3D Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />
      
      {/* Dark overlay for contrast */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/90 to-gray-900 z-1"></div>
      
      <main className="relative h-screen flex flex-col justify-center items-center p-4 z-10 overflow-hidden">
        <motion.div
          className="w-full max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            Aryanshh Srivastava
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Developer | Designer | Tech Innovator
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {BRIEF_DESCRIPTION}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FloatingIcons />
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}