'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { GREEN_TEXT_COLOR } from '@/app/shared/constant'

gsap.registerPlugin(ScrollTrigger)

export default function Frame1() {
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
    tl.to(container.current, {
      opacity: 0,
      y: 400,
      scale: 0,
    })
  }, [])

  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="fixed object-cover right-0 bottom-0 min-w-[100%] min-h-[100%]  bg-black -z-20"
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1371869084935057805/TEAM/8309/bed7/-e34c-45b1-9aab-0211a679430d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lTwa9hO3WAE1Uu0C5-VSogKV4h2hS6qwArOTqp0lS9uSysXYMeNGpq3rbd5qMobC5uO0tHdfHadhD9lBEd2lqre4Pb2H1AvBVxofacFlVRrH1GSUjnneJx8sQT4ly-D2F0veuOngqECYbHeNnyfo6BrFOE3J-eCh5ZNyflE-4JJ87UlG0dCXbd5No8vc1Xtt9M5r~LYbUxre46w8bCoq0YbZizt6KKpfP6x6q77Amune5gdgqueF76Sa74OsR~cA9NxuJw-DxKoKIHlLc0J6v~W40SIz0QkicCC3fN8lKknpVuSdyZQF3558qy~t6r9gBBMIzyflUFrGsYPTrkjK6Q__"
          type="video/mp4"
        />
      </video>
      <div className="relative overflow-y-hidden flex flex-col items-center   w-full h-screen overflow-x-hidden ">
        <Image
          ref={container}
          id="logo"
          className="logo animate-fadeInScaleUp duration-1000 ease-out"
          src="/logo-banner.png"
          width={700}
          height={700}
          alt="logo"
        />
        <div className="absolute top-[60%] w-full  flex flex-col items-center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Welcome To{' '}
            <span className={`text-[${GREEN_TEXT_COLOR}]`}>Blockify</span>
            <br />
            Reorganizing the World{' '}
            <span className={`text-[${GREEN_TEXT_COLOR}]`}>
              Through BlockChain
            </span>
          </Typography>
        </div>
      </div>
    </>
  )
}
