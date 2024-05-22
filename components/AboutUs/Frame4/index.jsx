import React from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import VerticalBanner from '@/components/shared/VerticalBanner'
import image1 from '@/public/about-us-4-1.png'
import image2 from '@/public/about-us-4-2.png'
import image3 from '@/public/about-us-4-3.png'
import { GREEN_TEXT_COLOR } from '@/shared/constants'

export default function Frame4() {
  const frame4Headline = (
    <>
      <span style={{ fontWeight: 'bold', color: GREEN_TEXT_COLOR }}>
        Engagement
      </span>
      <span> and</span>{' '}
      <span style={{ fontWeight: 'bold', color: GREEN_TEXT_COLOR }}>
        Vision
      </span>
    </>
  )
  const frame4BodyText = (
    <span>
      Join us at Blockify to explore how blockchain can revolutionize your
      operations and connect you to the future of a fully integrated, global
      network. Let’s build a smarter, more connected world together.
    </span>
  )
  const Image1 = (
    <Image
      src={image1}
      alt="image-4-1"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )

  const Image2 = (
    <Image
      src={image2}
      alt="image-4-2"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )
  const Image3 = (
    <Image
      src={image3}
      alt="image-4-3"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )
  return (
    <Box m="10%" width="80vw" display="flex" flexDirection="row">
      <Box
        mr={{ xs: 0, md: 2.5 }}
        flexDirection="column"
        justifyItems="center"
        sx={{ width: { xs: '100%', md: '50%' } }}
      >
        <VerticalBanner
          headline={frame4Headline}
          bodyText={frame4BodyText}
          media={Image1}
          textAlign={{ xs: 'center', md: 'left' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
        />
      </Box>
      <Box
        position="relative"
        display={{ xs: 'none', md: 'flex' }}
        flexDirection="column"
        width="50%"
      >
        <Box mb={4}> {Image2}</Box>
        <Box width="66%">{Image3}</Box>
      </Box>
    </Box>
  )
}
