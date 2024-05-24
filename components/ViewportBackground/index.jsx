'use client'
import { useEffect } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import Background from '../Background'

import ServiceBanner from '@/public/service-banner.png'
import ContactBanner from '@/public/contact-banner.png'

export default function ViewportBackground({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isServicePage = pathname === '/service'
  const isContactPage = pathname === '/contact'

  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    // Only run this effect client-side
    if (typeof window !== 'undefined') {
      // Get the full URL hash including the `#!` if it exists
      const hash = window.location.hash
      console.log(hash)

      // Extract the path after `#!` if it exists
      const isRefresh = hash.startsWith('#!') ? true : false
      console.log('isRefesh', isRefresh)
      console.log('path', path)

      // If the path was successfully extracted, navigate to that path
      if (isRefresh) {
        router.back()
      }
    }
  }, [router, path])

  return (
    <div
      className={`relative mx-auto my-16 h-screen ${isHome ? 'bg-[url(/background.png)] bg-cover bg-center' : ''}`}
    >
      {isServicePage && <Background imgSrc={ServiceBanner} />}
      {isContactPage && <Background imgSrc={ContactBanner} />}
      {children}
    </div>
  )
}
