'use client'
import Image from 'next/image'
import logo from './asset/logo-banner.png'
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
        },
      },
    })
    gsap.from(container.current, {
      opacity: 0,
      scale: 0.3,
      duration: 3,
      ease: 'circ.out',
    })
    tl.to(container.current, {
      opacity: 0,
      y: 400,
      scale: 0,
    })
  }, [])

  return (
    <div className="w-full h-screen overflow-x-hidden ">
      <video autoPlay loop muted className="fixed top-0 left-0 min-w-[100%] min-h-[100%]a -z-10">
        <source src="/background-banner.mp4" type="video/mp4" />
      </video>
      <NavBar />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Image
          ref={container}
          id="logo"
          className="logo"
          src={logo}
          width={700}
          height={700}
          alt="logo"
        />
      </div>
    </div>
  )
}
