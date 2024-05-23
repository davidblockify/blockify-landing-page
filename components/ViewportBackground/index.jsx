'use client'

import { usePathname } from 'next/navigation'

import Background from '../Background'

export default function ViewportBackground({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isServicePage = pathname === '/service'

  return (
    <div
      className={`mx-auto my-16 h-screen ${isHome ? 'bg-[url(/background.png)] bg-cover bg-center' : ''}`}
    >
      {isServicePage && <Background imgSrc="service-banner.png" />}
      {children}
    </div>
  )
}