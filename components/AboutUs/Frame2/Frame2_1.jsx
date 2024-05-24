import React from 'react'

import Image from 'next/image'

import image from '@/public/about-us-2-1.png'
import ResponsiveBanner from '@/components/shared/ResponsiveBanner'
import CustomSpan from '@/components/shared/CustomSpan'

export default function Frame2_1() {
  const image21 = (
    <Image
      src={image}
      alt="image-2-1"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )

  const headline = <CustomSpan>Introduction</CustomSpan>
  const bodyText = (
    <span>
      <CustomSpan>Blockify</CustomSpan> is pioneering the future of digital
      innovation with cutting-edge blockchain solutions tailored for the Web 3.0
      era.
    </span>
  )
  return (
    <ResponsiveBanner
      headline={headline}
      bodyText={bodyText}
      media={image21}
      mediaWidth="60%"
    />
  )
}
