'use client'

import React from 'react'

import Image from 'next/image'

import { styled } from '@mui/material/styles'

import image from '@/public/about-us-2-3.png'
import HorizontalBanner from '@/components/shared/HorizontalBanner'

const SpanStyled = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main
}))

export default function Frame2_2() {
  const image23 = (
    <Image
      src={image}
      alt="image-2-3"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )

  const headline = (
    <span>
      <SpanStyled>Value</SpanStyled> Proposition
    </span>
  )
  const bodyText = (
    <span>
      At <SpanStyled>Blockify</SpanStyled>, we recognize that each business has
      unique needs. That&apos;s why we offer customized support from the initial
      stages of project planning through to development and execution.
    </span>
  )
  return (
    <HorizontalBanner
      mediaWidth="60%"
      textAlign="left"
      headline={headline}
      bodyText={bodyText}
      media={image23}
    />
  )
}
