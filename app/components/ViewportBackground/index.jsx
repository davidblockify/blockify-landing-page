'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import Background from '../Background'

import Frame1 from '@/app/components/AboutUs/Frame1'
import HomeBanner from '@/public/background.png'
import ServiceBanner from '@/public/service-banner.png'
import ContactBanner from '@/public/contact-banner.png'

export default function ViewportBackground({ children }) {
  const pathname = usePathname()
  const banners = {
    '/': { imgSrc: HomeBanner, textBackground: <Frame1 /> },
    '/service': { imgSrc: ServiceBanner },
    '/contact': { imgSrc: ContactBanner }
  }

  const banner = banners[pathname]

  return (
    <div className="my-16 md:my-20">
      {banner && (
        <Background
          imgSrc={banner.imgSrc}
          textBackground={banner.textBackground}
        />
      )}
      {children}
    </div>
  )
}
