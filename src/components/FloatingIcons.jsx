import { motion } from 'framer-motion'
import { Code, Cpu, Server, Database } from 'lucide-react'

const icons = [
  { icon: <Code className="w-8 h-8" />, color: 'text-purple-400' },
  { icon: <Cpu className="w-8 h-8" />, color: 'text-blue-400' },
  { icon: <Server className="w-8 h-8" />, color: 'text-pink-400' },
  { icon: <Database className="w-8 h-8" />, color: 'text-cyan-400' },
]

export default function FloatingIcons() {
  return (
    <div className="flex flex-wrap gap-6 mt-12">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className={`p-4 rounded-full bg-white/5 ${item.color}`}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}