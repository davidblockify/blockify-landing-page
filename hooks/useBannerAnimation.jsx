import { useRef } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export const useBannerAnimations = () => {
  const animateBanner = (ref, triggerId, directionX) => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: triggerId,
        start: 'top bottom',
        end: '100% 70%',
        scrub: 0.5,
      },
      x: directionX,
    })
  }

  const banner1 = useRef()
  const banner2 = useRef()
  const banner3 = useRef()

  useGSAP(() => {
    animateBanner(banner1, '#card1', 500)
    animateBanner(banner2, '#card2', -500)
    animateBanner(banner3, '#card3', 500)
  }, [])

  return { banner1, banner2, banner3 }
}
