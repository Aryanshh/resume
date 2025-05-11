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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      className="glass-card p-4 fixed w-full top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-xl font-bold hover:text-tech-accent transition-colors">
            Aryanshh Srivastava
          </Link>
        </motion.div>
        
        <div className="flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.path}
                className="hover:text-tech-accent transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}