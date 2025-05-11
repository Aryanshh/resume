import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiClock, FiFigma, FiCode, FiLayers } from 'react-icons/fi'

export default function ProjectsComingSoon() {
  const features = [
    { icon: <FiFigma size={24} />, text: "UI/UX Showcase" },
    { icon: <FiCode size={24} />, text: "Code Samples" },
    { icon: <FiLayers size={24} />, text: "Case Studies" }
  ]

  return (
    <>
      <Head>
        <title>Projects | Coming Soon</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-gray-600 rounded-lg"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, Math.random() * 180 - 90]
              }}
              transition={{
                duration: Math.random() * 30 + 30,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl"
        >
          <div className="inline-flex items-center justify-center bg-blue-900/30 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <FiClock className="mr-2 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">COMING SOON</span>
          </div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Projects Portfolio
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-300 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting something extraordinary. My collection of projects will be unveiled soon with detailed case studies and interactive demos.
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <div className="text-blue-400 mb-3">{feature.icon}</div>
                <h3 className="text-white font-medium">{feature.text}</h3>
              </div>
            ))}
          </motion.div>

          {/* Countdown/CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-gray-400 mb-6">Launching in</p>
            <div className="flex justify-center gap-3 mb-8">
              <div className="bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-white">14</div>
                <div className="text-xs text-gray-400">DAYS</div>
              </div>
              <div className="bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-white">06</div>
                <div className="text-xs text-gray-400">HOURS</div>
              </div>
              <div className="bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-white">42</div>
                <div className="text-xs text-gray-400">MINUTES</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all">
              Notify Me
            </button>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </>
  )
}