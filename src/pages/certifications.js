import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiExternalLink, FiDownload } from 'react-icons/fi'
import certifications from '../../data/certifications' // Import the data

const CertificationsPage = () => {
  return (
    <>
      <Head>
        <title>Certifications | Aryanshh Srivastava</title>
      </Head>

      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-8 text-center">
            My Certifications
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                {/* Certificate card content */}
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </a>
                {/* ... rest of your card content ... */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificationsPage