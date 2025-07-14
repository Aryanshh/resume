import Head from 'next/head'
import { motion } from 'framer-motion'

export default function DesignCollage() {
  const designItems = [
    {
      id: 1,
      type: 'image',
      src: '/designs/graphics/g1.jpg',
      title: 'Graphic Design Test',
      width: 1200,
      height: 800
    },
    {
      id: 2,
      type: 'video',
      src: '/designs/graphics/1.jpg',
      poster: '/designs/graphics/1.jpg',
      title: '3D Product Animation',
      width: 400,
      height: 1080
    },
    // Add all 60+ items...
  ]

  return (
    <>
      <Head>
        <title>Design Collage | Aryanshh Srivastava</title>
      </Head>

      <div className="min-h-screen bg-gray-900 p-4 md:p-8">
        {/* Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {designItems.map((item) => {
            const aspectRatio = item.width / item.height
            const colSpan = aspectRatio > 1.3 ? Math.min(Math.floor(aspectRatio), 3) : 1
            const rowSpan = aspectRatio < 0.7 ? 2 : 1

            return (
              <motion.div
                key={item.id}
                className="relative rounded-lg overflow-hidden group"
                style={{
                  gridColumnEnd: `span ${colSpan}`,
                  gridRowEnd: `span ${rowSpan}`
                }}
                whileHover="hover"
                initial="initial"
              >
                {/* Media with dark overlay */}
                <motion.div
                  className="relative h-full w-full"
                  variants={{
                    initial: { opacity: 1 },
                    hover: { opacity: 0.7 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      loop
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-30"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Centered Title */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="text-white text-lg md:text-xl font-medium text-center px-4"
                    variants={{
                      initial: { y: 10 },
                      hover: { y: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}