/* eslint-disable quotes */
'use client'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { useBannerAnimations } from '@/hooks/useBannerAnimation'
import BannerCard from '@/components/BannerCard'
import ContentText from '@/components/BannerCard/ContentText'

gsap.registerPlugin(ScrollTrigger)

export default function Frame2() {
  const { banner1, banner2, banner3 } = useBannerAnimations()

  return (
    <div className="flex flex-col items-center gap-10 w-full p-10 overflow-x-hidden">
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
          className="xl:w-[60%] lg:w-[60%] 2xl:h-full lg:h-[90%] md:w-3/4 h-full min-h-[10rem]  lg:rounded-3xl rounded-md"
          src="/introduction-img.png"
          width={1406}
          height={792}
          alt="introduction image"
        />
      </BannerCard>

      <BannerCard flexDirection={'flex-col-reverse'}>
        <div
          ref={banner2}
          className="xl:w-[60%] lg:w-[60%] 2xl:h-full lg:h-[90%] md:w-3/4 h-full min-h-[10rem] lg:rounded-3xl rounded-md "
        >
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-fill rounded-3xl green-filter"
          >
            <source
              src="https://vciflravlrgslrxhqidd.supabase.co/storage/v1/object/public/blockify-landing-page/bitcoin-statement.mp4?t=2024-05-17T09%3A18%3A25.080Z"
              type="video/mp4"
            />
          </video>
        </div>

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
          className="xl:w-[60%] lg:w-[60%] 2xl:h-full lg:h-[90%] md:w-3/4 h-full min-h-[10rem]  lg:rounded-3xl rounded-md"
          src="/value-img.png"
          width={1406}
          height={792}
          alt="introduction image"
        />
      </BannerCard>
    </div>
  )
}
