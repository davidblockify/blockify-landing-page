'use client'
import React from 'react'

import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'

import Frame3Text from './Frame3Text'

const backgroundUrl =
  'https://vciflravlrgslrxhqidd.supabase.co/storage/v1/object/public/blockify-landing-page/bitcoin-bg.mp4?t=2024-05-17T10%3A46%3A52.045Z'

export default function Frame3() {
  return (
    <Box
      position="relative"
      m="10%"
      width="80vw"
      display="flex"
      flexDirection={{ xs: 'column', md: 'column', lg: 'row' }}
    >
      <Frame3Text displaySettings={{ xs: 'none', md: 'flex', lg: 'none' }} />
      <Frame3Text displaySettings={{ xs: 'flex', md: 'none', lg: 'none' }} />

      <Box
        borderRadius={4}
        sx={{
          width: { md: '100%', lg: '66%' },
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <CardMedia
          component="video"
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          src={backgroundUrl}
        />
      </Box>

      <Frame3Text displaySettings={{ xs: 'none', md: 'none', lg: 'flex' }} />
    </Box>
  )
}
