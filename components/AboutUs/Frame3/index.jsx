'use client'
import React from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import Frame3Text from './Frame3Text'

import image from '@/public/about-us-3-1.png'

export default function Frame3() {
  const frame3Image = (
    <Image
      src={image}
      alt="image-4-1"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection={{ xs: 'column', md: 'column', lg: 'row' }}
    >
      <Frame3Text displaySettings={{ xs: 'flex', md: 'none', lg: 'none' }} />
      <Frame3Text displaySettings={{ xs: 'none', md: 'flex', lg: 'none' }} />

      <Box
        borderRadius={4}
        sx={{
          width: { xs: '100%', md: '100%', lg: '66%' },
          height: '100%',
          overflow: 'hidden'
        }}
      >
        {frame3Image}
      </Box>
      <Frame3Text displaySettings={{ xs: 'none', md: 'none', lg: 'flex' }} />
    </Box>
  )
}
