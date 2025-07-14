import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFigma, FiCode, FiLayers, FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "DronAksh",
      description: "An AI-powered Drone for Smart Surveillance and Emergency Response.",
      detailedDescription: "DronAksh is an intelligent drone-based aerial surveillance and monitoring system designed to enhance public safety in real-time. Equipped with advanced AI models, DronAksh autonomously detects and responds to critical situations such as crowd congestion, smoking in public areas, visible weapons, lost individuals, and physical altercations. The system also allows users to raise SOS alerts via a chatbot interface.",
      keyFeatures: [
        "🔍 Crowd Detection – Identifies crowd density and suggests safe diversions",
        "🚬 Smoking Detection – Detects public smoking and captures proof images",
        "🔪 Weapon Detection – Recognizes visible weapons and raises instant alerts.",
        "🕴️ Lost Person Detection – Matches faces with uploaded images to find missing people.",
        "🚨 Fight Detection – Spots physical altercations using video-based AI."

      ],
      tags: ["React", "Node.js", "HTML", "CSS", "Drone", "AI","Python", "OpenCV", "TensorFlow","IoT"],
      link: "#",
      github: "#",
      icon: <FiLayers size={20} className="text-purple-400" />
    },
    {
      id: 2,
      title: "Dronico",
      description: "Empowering Farmers with AI-Driven Aerial Insights for Smarter, Healthier, and More Sustainable Agriculture.",
      detailedDescription: "Dronico is an AI-powered agricultural drone system designed to assist farmers with precision farming, real-time crop analysis, and predictive insights. By integrating multispectral imaging, AI models, and cloud-based analytics, Dronico empowers farmers to make informed decisions about irrigation, fertilization, pest control, and yield estimation — all from the sky",
      keyFeatures: [
        "Crop Health Detection – Uses NDVI analysis to identify unhealthy crop regions.",
        "Weed Detection – Detects unwanted plants competing with crops using AI.",
        "Pest & Disease Detection – Spots early signs of infestation or infection.",
        "Water Stress Analysis – Identifies areas needing irrigation through heat mapping.",
        "Fertilizer Recommendation – Suggests nutrient-specific inputs for each crop zone.",
        "Yield Estimation – Predicts output using historical data and AI modeling."
      ],
      tags: ["Drone", "React", "IoT", "Tensorflow","OpenCV", "Node.js", "AI", "Python", "HTML", "CSS"],
      link: "#",
      github: "#",
      icon: <FiFigma size={20} className="text-blue-400" />
    },
    {
      id: 3,
      title: "Navico",
      description: "Cross-platform fitness application with workout tracking, nutrition plans, and progress analytics.",
      detailedDescription: "Developed a fitness app that helps users track workouts, nutrition, and progress. Features include: custom workout plans, exercise database with animations, nutrition tracking with barcode scanning, progress charts, and social features.",
      keyFeatures: [
        "AI-powered workout recommendations",
        "Barcode scanner for nutrition tracking",
        "Exercise animation library",
        "Social challenges and leaderboards",
        "Wearable device integration",
        "Recovery time prediction"
      ],
      tags: ["React Native", "Firebase", "GraphQL", "Expo"],
      link: "#",
      github: "#",
      icon: <FiCode size={20} className="text-green-400" />
    },
    {
      id: 4,
      title: "Project Management Tool",
      description: "Collaborative workspace for teams to manage tasks, timelines, and documents.",
      detailedDescription: "Built a comprehensive project management solution with real-time collaboration features, Gantt charts, document sharing, and team communication tools.",
      keyFeatures: [
        "Interactive Gantt charts",
        "Real-time document collaboration",
        "Time tracking with screenshots",
        "Automated progress reporting",
        "Integrations with 50+ tools",
        "Custom workflow automation"
      ],
      tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      link: "#",
      github: "#",
      icon: <FiLayers size={20} className="text-yellow-400" />
    },
    {
      id: 5,
      title: "Healthcare Portal",
      description: "Secure patient management system for clinics with telemedicine capabilities.",
      detailedDescription: "Developed a HIPAA-compliant healthcare portal with patient records management, appointment scheduling, and video consultation features.",
      keyFeatures: [
        "HIPAA-compliant data security",
        "Video consultation with screen sharing",
        "Electronic prescription system",
        "Patient health analytics dashboard",
        "Automated appointment reminders",
        "Integration with lab systems"
      ],
      tags: ["Angular", "Java", "MySQL", "Twilio"],
      link: "#",
      github: "#",
      icon: <FiLayers size={20} className="text-red-400" />
    },
    {
      id: 6,
      title: "E-Learning Platform",
      description: "Interactive online learning system with video courses and progress tracking.",
      detailedDescription: "Created a platform for delivering online courses with interactive quizzes, video lessons, certification, and student progress analytics.",
      keyFeatures: [
        "Interactive video lessons with quizzes",
        "AI-powered course recommendations",
        "Gamified learning experience",
        "Certificate generation",
        "Discussion forums and Q&A",
        "Offline content access"
      ],
      tags: ["Vue.js", "Laravel", "MongoDB", "AWS"],
      link: "#",
      github: "#",
      icon: <FiLayers size={20} className="text-indigo-400" />
    }
  ]

  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl w-full"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My Projects
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-300 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Here are some of my recent projects. Click on any to see more details.
          </motion.p>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-left flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-5 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Project View */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div 
                className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div 
                  className="bg-gray-800 border border-gray-700/50 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
                    onClick={() => setSelectedProject(null)}
                  >
                    <FiX size={24} />
                  </button>

                  <div className="p-8 text-left">
                    <div className="flex items-start mb-8">
                      <div className="p-4 bg-gray-700/50 rounded-lg mr-6">
                        {selectedProject.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, j) => (
                            <span key={j} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 mb-6">{selectedProject.detailedDescription}</p>
                      
                      <div className="mt-8 bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.keyFeatures.map((feature, index) => (
                            <li key={index} className="text-gray-300">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex space-x-4">
                      <a 
                        href={selectedProject.link} 
                        className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                      <a 
                        href={selectedProject.github} 
                        className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="mr-2" /> Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-400"
          >
            <p>Want to see more? Check out my <a href="#" className="text-blue-400 hover:underline">GitHub profile</a>.</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}