import React from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import Logo from '@/public/logo-with-text.png'

export default function LogoBlockify({ displaySettings }) {
  return (
    <Box sx={{ display: displaySettings, mr: '0.5em' }}>
      <Image width="auto" height="auto" src={Logo} alt="Brand Logo" />
    </Box>
  )
}
