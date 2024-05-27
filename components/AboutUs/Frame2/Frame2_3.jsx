import React from 'react'

import Image from 'next/image'

import image from '@/public/about-us-2-3.png'
import ResponsiveBanner from '@/components/shared/ResponsiveBanner'
import CustomSpan from '@/components/shared/CustomSpan'
import { useAboutUsAnimations } from '@/hooks/useAboutUsAnimations'

export default function Frame2_2() {
  const { banner3 } = useAboutUsAnimations()

  const image23 = (
    <Image
      ref={banner3}
      src={image}
      loading="lazy"
      alt="image-2-3"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )

  const headline = (
    <span>
      <CustomSpan>Value</CustomSpan> Proposition
    </span>
  )
  const bodyText = (
    <span>
      At <CustomSpan>Blockify</CustomSpan>, we recognize that each business has
      unique needs. That&apos;s why we offer customized support from the initial
      stages of project planning through to development and execution.
    </span>
  )
  return (
    <ResponsiveBanner
      id="card3"
      mediaWidth={60}
      headline={headline}
      bodyText={bodyText}
      media={image23}
    />
  )
}
