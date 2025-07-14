import Head from 'next/head'
import { motion } from 'framer-motion'
import { Code2, Cpu, Users, Rocket, BrainCircuit, GitBranch } from 'lucide-react'

// Updated color theme to match Aryanshh's branding
const experiences = [
  {
    icon: <Rocket className="w-6 h-6" />,
    role: "President",
    company: "TinkEthix",
    period: "2022-2023",
    description: "Mentored 300+ students in technology and innovation",
    highlights: [
      "Organized 12+ tech workshops",
      "Led team of 15 executives",
      "Increased membership by 40%"
    ],
    accent: "from-blue-500 to-purple-600" // Modern tech gradient
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    role: "Tech and Flying Head",
    company: "Drone Society",
    period: "2024-2025",
    description: "Developed computer vision models for medical imaging",
    highlights: [
      "Published research paper",
      "92% model accuracy",
      "Conference presentations"
    ],
    accent: "from-emerald-500 to-cyan-400" // Fresh innovation gradient
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    role: "Member",
    company: "Placom Bennett University",
    period: "2025-2026",
    description: "Implemented CI/CD pipelines for enterprise clients",
    highlights: [
      "Reduced deployment time by 65%",
      "Automated testing",
      "Infrastructure as code"
    ],
    accent: "from-amber-500 to-pink-500" // Energetic gradient
  }
]

export default function About() {
  return (
    <>
      <Head>
        <title>About | Aryanshh Srivastava</title>
        <meta name="theme-color" content="#111827" />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen p-8 max-w-6xl mx-auto pt-24 bg-gray-900"
      >
        {/* Header - Modern Tech Style */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Aryanshh Srivastava
          </h1>
          <div className="text-lg mb-6">
            <span className="font-semibold text-blue-300">Developer</span> | 
            <span className="font-semibold text-purple-300"> Designer</span> | 
            <span className="font-semibold text-cyan-300"> Entrepreneur</span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionate about AI, robotics, and creating innovative digital experiences. 
            Currently pursuing Computer Science at Bennett University.
          </p>
        </motion.div>

        {/* Experience Boxes - Tech Card Design */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-xl p-0.5 bg-gradient-to-br ${exp.accent} opacity-70 group-hover:opacity-100 transition-all`}></div>
              <div className="relative h-full bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 group-hover:border-blue-400/50 transition-all">
                <div className={`mb-4 p-3 w-12 h-12 rounded-lg bg-gradient-to-br ${exp.accent} flex items-center justify-center`}>
                  {exp.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-1 text-white">{exp.role}</h3>
                <p className="text-blue-300 mb-3">{exp.company} • <span className="text-purple-300">{exp.period}</span></p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className={`mr-2 mt-1 text-xs ${exp.accent.split(' ')[0].replace('from-', 'text-')}`}>▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section - Interactive Tech Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "AI/ML", icon: "", level: 75 },
              { name: "Web Dev", icon: "", level: 65 },
              { name: "Robotics", icon: "", level: 90 },
              { name: "Cloud", icon: "", level: 80 },
              { name: "UI/UX", icon: "", level: 70 },
              { name: "Drones", icon: "", level: 90 },
              { name: "IoT", icon: "", level: 90 }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700/50 p-4 rounded-lg border border-gray-600"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-white">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.main>
    </>
  )
}