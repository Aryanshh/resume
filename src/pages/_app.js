import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)
    
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isLoading && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          exit={{ width: '100%' }}
          transition={{ duration: 2 }}
          className="fixed top-0 left-0 h-1 bg-tech-accent z-50"
        >
          <div className="h-full bg-tech-primary w-full" />
        </motion.div>
      )}

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  )
}