'use client'

import React from 'react'

import Image from 'next/image'

import { styled } from '@mui/material/styles'

import image from '@/public/about-us-2-1.png'
import HorizontalBanner from '@/components/shared/HorizontalBanner'

const SpanStyled = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main
}))

export default function Frame2_1() {
  const image21 = (
    <Image
      src={image}
      alt="image-2-1"
      sizes="100vw"
      style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
    />
  )

  const headline = <SpanStyled>Introduction</SpanStyled>
  const bodyText = (
    <span>
      Blockify is pioneering the future of digital innovation with cutting-edge
      blockchain solutions tailored for the Web 3.0 era.
    </span>
  )
  return (
    <HorizontalBanner headline={headline} bodyText={bodyText} media={image21} />
  )
}
