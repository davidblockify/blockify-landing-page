'use client'
import Image from 'next/image'
import logo from './asset/company-logo.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import NavBar from './components/Navbar'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const container = useRef()

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#navbar',
        start: 'bottom top',
        end: '+600px',
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
        snap: {
          snapTo: 'labels',
          ease: 'circ.in',

        }
      },
    })
    gsap.from(container.current, {
      opacity: 0,
      duration: 3,
      ease: 'circ.out',
    })
    tl.to(container.current, {
      opacity: 0,
      y: 400,
    })
  }, [])

  return (
    <div className="bg-landing-page h-screen bg-fixed bg-center bg-no-repeat bg-cover">
      <NavBar />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Image
          ref={container}
          id="logo"
          className="logo"
          src={logo}
          width={500}
          height={500}
          alt="logo"
        />
      </div>
    </div>
  )
}
