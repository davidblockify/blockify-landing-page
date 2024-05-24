'use client'
import React from 'react'

import Box from '@mui/material/Box'

import Frame1 from '@/components/AboutUs/Frame1'
import Frame2 from '@/components/AboutUs/Frame2'
import Frame3 from '@/components/AboutUs/Frame3'
import Frame4 from '@/components/AboutUs/Frame4'

export default function Home() {
  const frames = [Frame1, Frame2, Frame3, Frame4]

  return (
    <Box pt="5%" pb="15%">
      {frames.map((Frame, index) => (
        <Box key={index} sx={{ mt: index === 0 ? 0 : 4 }}>
          <Frame />
        </Box>
      ))}
    </Box>
  )
}
