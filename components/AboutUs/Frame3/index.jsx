import React from 'react'

import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'

import Frame3Text from './Frame3Text'

export default function Frame3() {
  return (
    <Box
      position="relative"
      m="10%"
      width="80vw"
      display="flex"
      flexDirection="column"
    >
      <Frame3Text displaySettings={{ xs: 'flex', md: 'none' }} />

      <Box
        position="relative"
        flex="1"
        zIndex={0}
        borderRadius={4}
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          top: 0,
          left: 0
        }}
      >
        <CardMedia
          component="video"
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          src="/background-banner.mp4"
        />
        <Frame3Text displaySettings={{ xs: 'none', md: 'flex' }} />
      </Box>
    </Box>
  )
}
