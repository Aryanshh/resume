import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiMessageSquare, FiMail, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function Contact() {
  const socialLinks = [
    { 
      icon: <FiMessageSquare className="text-3xl" />, 
      url: 'https://wa.me/919876543210', 
      color: 'from-green-400 to-green-600',
      name: 'WhatsApp'
    },
    { 
      icon: <FiMail className="text-3xl" />, 
      url: 'mailto:hello@aryanshh.dev', 
      color: 'from-purple-400 to-purple-600',
      name: 'Email'
    },
    { 
      icon: <FiLinkedin className="text-3xl" />, 
      url: 'https://linkedin.com/in/yourprofile', 
      color: 'from-blue-500 to-blue-700',
      name: 'LinkedIn'
    },
    { 
      icon: <FiGithub className="text-3xl" />, 
      url: 'https://github.com/yourusername', 
      color: 'from-gray-600 to-gray-800',
      name: 'GitHub'
    },
    { 
      icon: <FiTwitter className="text-3xl" />, 
      url: 'https://twitter.com/yourhandle', 
      color: 'from-sky-400 to-sky-600',
      name: 'Twitter'
    },
    { 
      icon: <FiInstagram className="text-3xl" />, 
      url: 'https://instagram.com/yourprofile', 
      color: 'from-pink-500 to-rose-600',
      name: 'Instagram'
    }
  ]

  return (
    <>
      <Head>
        <title>Contact | Aryanshh Srivastava</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-6"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Reach out through any of these platforms
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-br ${social.color} rounded-2xl p-8 flex flex-col items-center justify-center aspect-square shadow-xl hover:shadow-2xl transition-all`}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-white mb-4">
                {social.icon}
              </div>
              <span className="text-white font-medium text-lg">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>Pick your favorite platform to connect with me</p>
        </motion.div>
      </div>
    </>
  )
}