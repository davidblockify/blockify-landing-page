import { useRef } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export const useAboutUsAnimations = () => {
  const animateBanner = (ref, triggerId, directionX) => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: triggerId,
        start: 'top bottom',
        end: '100% 70%',
        scrub: 0.5
      },
      x: directionX
    })
  }

  const banner1 = useRef()
  const banner2 = useRef()
  const banner3 = useRef()
  const banner4 = useRef()
  const banner5_1 = useRef()
  const banner5_2 = useRef()
  const banner5_3 = useRef()

  useGSAP(() => {
    animateBanner(banner1, '#card1', 500)
    animateBanner(banner2, '#card2', -500)
    animateBanner(banner3, '#card3', 500)
    animateBanner(banner4, '#card4', -500)
    animateBanner(banner5_1, '#card5', -500)
    animateBanner(banner5_2, '#card6', 500)
    animateBanner(banner5_3, '#card6', 500)
  }, [])

  return { banner1, banner2, banner3, banner4, banner5_1, banner5_2, banner5_3 }
}
