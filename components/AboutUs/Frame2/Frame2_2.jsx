import React from 'react'

import Image from 'next/image'

import image from '@/public/about-us-2-2.png'
import ResponsiveBanner from '@/components/shared/ResponsiveBanner'
import CustomSpan from '@/components/shared/CustomSpan'

export default function Frame2_2() {
  const image22 = (
    <Image
      src={image}
      alt="image-2-2"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )

  const headline = (
    <span>
      <CustomSpan>Mission</CustomSpan> Statement
    </span>
  )
  const bodyText = (
    <span>
      <CustomSpan>As a leader in IT services</CustomSpan> specializing in
      blockchain technology, we are dedicated to transforming industries
      worldwide. Under our bold slogan &apos;blocks the world&apos;, we strive
      to unlock the full potential of blockchain technology, making every
      transaction more transparent, secure, and efficient.
    </span>
  )
  return (
    <ResponsiveBanner
      mediaWidth="50%"
      headline={headline}
      bodyText={bodyText}
      media={image22}
      alignRight
    />
  )
}
