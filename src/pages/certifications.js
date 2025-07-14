import Head from 'next/head'
import { motion } from 'framer-motion'
import certifications from '../../data/certifications'

const CertificationsPage = () => {
  // Array of subtle tint colors
  const tintColors = [
    'rgba(100, 200, 255, 0.1)',  // light blue
    'rgba(150, 220, 255, 0.1)',  // softer blue
    'rgba(200, 230, 255, 0.1)',   // very light blue
    'rgba(220, 240, 255, 0.1)',   // pale blue
    'rgba(180, 210, 255, 0.1)'    // medium blue
  ]

  return (
    <>
      <Head>
        <title>Certifications | Aryanshh Srivastava</title>
        <meta name="description" content="Collection of professional certifications" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 mb-16 text-center tracking-tight"
          >
            CERTIFICATIONS
          </motion.h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 0.77, 0.47, 0.97]
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 10
                  } 
                }}
                className="cursor-pointer relative group"
              >
                <div 
                  className="absolute inset-0 rounded-sm"
                  style={{
                    backgroundColor: tintColors[index % tintColors.length],
                    mixBlendMode: 'multiply',
                    transition: 'all 0.3s ease'
                  }}
                />
                <a 
                  href={cert.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <motion.img
                    src={cert.image}
                    alt=""
                    className="w-full h-auto object-contain rounded-sm shadow-lg hover:shadow-xl transition-all"
                    loading="lazy"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificationsPage