import React from 'react'

import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'

import Frame4Text from './Frame4Text'

const backgroundUrl =
  'https://vciflravlrgslrxhqidd.supabase.co/storage/v1/object/public/blockify-landing-page/bitcoin-bg.mp4?t=2024-05-17T10%3A46%3A52.045Z'

export default function Frame4() {
  return (
    <Box m="5%">
      <Frame4Text displaySettings={{ xs: 'none', md: 'flex' }} />
      <Frame4Text displaySettings={{ xs: 'flex', md: 'none' }} />

      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <CardMedia
          component="video"
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%' }}
          src={backgroundUrl}
        />
      </Box>
    </Box>
  )
}
