import React from 'react'

import Image from 'next/image'

import image from '@/public/about-us-3-1.png'
import ResponsiveBanner from '@/components/shared/ResponsiveBanner'
import CustomSpan from '@/components/shared/CustomSpan'
import { useAboutUsAnimations } from '@/hooks/useAboutUsAnimations'

export default function Frame3() {
  const { banner4 } = useAboutUsAnimations()

  const frame3Image = (
    <Image
      ref={banner4}
      src={image}
      loading="lazy"
      alt="image-4-1"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )
  const headline = (
    <>
      <CustomSpan>Call</CustomSpan>
      <span> to action</span>
    </>
  )

  const bodyText = (
    <span>
      Whether you&apos;re looking to intergrate blockchain into your existing
      operations or start a new venture, we prodive the expertise and tools
      necessary to seamlessly align your business model with the advencements of{' '}
      <CustomSpan>Web 3.0</CustomSpan>
    </span>
  )
  return (
    <ResponsiveBanner
      id="card4"
      headline={headline}
      bodyText={bodyText}
      media={frame3Image}
      alignRight
    />
  )
}
