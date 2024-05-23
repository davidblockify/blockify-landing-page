'use client'

import React from 'react'

import Image from 'next/image'

import { styled } from '@mui/material/styles'

import image from '@/public/about-us-2-2.png'
import HorizontalBanner from '@/components/shared/HorizontalBanner'

const SpanStyled = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main
}))

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
      <SpanStyled>Mission</SpanStyled> Statement
    </span>
  )
  const bodyText = (
    <span>
      <SpanStyled>As a leader in IT services</SpanStyled> specializing in
      blockchain technology, we are dedicated to transforming industries
      worldwide. Under our bold slogan &apos;blocks the world&apos;, we strive
      to unlock the full potential of blockchain technology, making every
      transaction more transparent, secure, and efficient.
    </span>
  )
  return (
    <HorizontalBanner
      mediaWidth="50%"
      textAlign="right"
      headline={headline}
      bodyText={bodyText}
      media={image22}
    />
  )
}
