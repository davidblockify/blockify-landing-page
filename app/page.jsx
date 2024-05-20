import React from 'react'

import Box from '@mui/material/Box'

import Frame1 from '@/components/AboutUs/Frame1'
import Frame2 from '@/components/AboutUs/Frame2'
import Frame3 from '@/components/AboutUs/Frame3'

export default function Home() {
  return (
    <Box mb={20} mt={10}>
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </Box>
  )
}
