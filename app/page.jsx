'use client'
import React from 'react'

import Box from '@mui/material/Box'

import Frame2_1 from '@/components/AboutUs/Frame2/Frame2_1'
import Frame2_2 from '@/components/AboutUs/Frame2/Frame2_2'
import Frame2_3 from '@/components/AboutUs/Frame2/Frame2_3'
import Frame3 from '@/components/AboutUs/Frame3'
import Frame4 from '@/components/AboutUs/Frame4'

export default function Home() {
  const frames = [Frame2_1, Frame2_2, Frame2_3, Frame3, Frame4]

  return (
    <React.Fragment>
      {frames.map((Frame, index) => (
        <Box key={index} mb={{ xs: 4, md: 15 }}>
          <Frame />
        </Box>
      ))}
    </React.Fragment>
  )
}
