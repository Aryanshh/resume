import Navbar from './Navbar'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  )
}