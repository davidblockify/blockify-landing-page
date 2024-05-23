/* eslint-disable quotes */
'use client'

import React from 'react'

import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { useAboutUsFrame2Animations } from '@/hooks/useAboutUsFrame2Animations'
import BannerCard from '@/components/BannerCard'
import ContentText from '@/components/ContentText'
import image1 from '@/public/about-us-2-1.png'
import image2 from '@/public/about-us-2-2.png'
import image3 from '@/public/about-us-2-3.png'

gsap.registerPlugin(ScrollTrigger)

export default function Frame2() {
  const { banner1, banner2, banner3 } = useAboutUsFrame2Animations()

  return (
    <div className="flex flex-col items-center gap-10 w-full overflow-x-hidden">
      <BannerCard flexDirection={'flex-col'}>
        <ContentText
          id={'card1'}
          isTextFull={false}
          greenHeading={'Introduction'}
          boldContent={'Blockify'}
          content={
            'is pioneering the future of digital innovation with cutting-edge blockchain solutions tailored for the Web 3.0 era.'
          }
        />

        <Image
          ref={banner1}
          src={image1}
          loading="lazy"
          alt="introduction image"
          sizes="100vw"
          style={{ width: '100%', height: 'auto', borderRadius: 20 }}
        />
      </BannerCard>

      <BannerCard flexDirection={'flex-col-reverse'}>
        <Image
          ref={banner2}
          src={image2}
          loading="lazy"
          alt="introduction image"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />

        <ContentText
          id={'card2'}
          isTextFull={true}
          greenHeading={'Mission'}
          heading={'Statement'}
          boldContent={'As a leader in IT services'}
          content={
            "specializing in blockchain technology, we are dedicated to transforming industries worldwide. Under our bold slogan, 'blocks the world,' we strive to unlock the full potential of blockchain technology, making every transaction more transparent, secure, and efficient"
          }
        />
      </BannerCard>

      <BannerCard flexDirection={'flex-col'}>
        <ContentText
          id={'card3'}
          isTextFull={false}
          greenHeading={'Value'}
          heading={'Proposition'}
          boldContent={'Blockify,'}
          content={
            "we recognize that each business has unique needs. That's why we offer customized support from the initial stages of project planning through to development and execution."
          }
        />

        <Image
          ref={banner3}
          src={image3}
          alt="introduction image"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </BannerCard>
    </div>
  )
}
