import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Design", path: "/designs" },
  { name: "Contact", path: "/contact" }
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Floating Navbar Container */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.1
        }}
        className="fixed w-full top-6 z-50" // Increased top spacing to 6 (1.5rem)
      >
        {/* Glass Background Container */}
        <motion.div
          className="mx-auto max-w-max"
          style={{
            background: 'rgba(20, 20, 20, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '50px',
            border: '1px solid rgba(113, 88, 226, 0.25)',
            boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
            padding: '0.75rem 2rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          whileHover={{
            boxShadow: '0 8px 30px rgba(113, 88, 226, 0.25)'
          }}
        >
          {/* Navbar Content */}
          <div className="flex items-center">
            {/* Name with 5 units spacing to the right */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ marginRight: '5rem' }} // 5 units of space (5rem)
            >
              <Link 
                href="/" 
                className="text-xl font-bold hover:text-tech-accent transition-colors duration-200"
              >
                Aryanshh Srivastava
              </Link>
            </motion.div>
            
            {/* Navigation Links */}
            <div className="flex space-x-8"> {/* Increased space between links */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.2 + (index * 0.05),
                    type: "spring",
                    stiffness: 300,
                    damping: 12
                  }}
                  whileHover={{ 
                    y: -2,
                    color: '#7158e2'
                  }}
                >
                  <Link
                    href={item.path}
                    className="text-sm font-medium transition-colors duration-150"
                    style={{
                      padding: '0.5rem 0',
                      position: 'relative'
                    }}
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-px bg-tech-accent"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}