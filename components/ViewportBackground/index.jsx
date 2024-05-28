'use client'

import { usePathname } from 'next/navigation'

import Background from '../Background'

import Frame1 from '@/components/AboutUs/Frame1'
import HomeBanner from '@/public/background.png'
import ServiceBanner from '@/public/service-banner.png'
import ContactBanner from '@/public/contact-banner.png'

export default function ViewportBackground({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isServicePage = pathname === '/service'
  const isContactPage = pathname === '/contact'

  return (
    <div className={'mx-auto my-16 md:my-20'}>
      {isHome && <Background imgSrc={HomeBanner} textBackground={<Frame1 />} />}
      {isServicePage && <Background imgSrc={ServiceBanner} />}
      {isContactPage && <Background imgSrc={ContactBanner} />}
      {children}
    </div>
  )
}
