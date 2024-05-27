import React from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import LogoDesktop from '@/public/logo-desktop.png'
import LogoMobile from '@/public/logo-mobile.png'
import useViewPort from '@/hooks/useViewPort'

export default function LogoBlockify({ displaySettings }) {
  const { isMobile } = useViewPort()

  return (
    <Box sx={{ display: displaySettings, mr: '0.5em' }}>
      <Image
        width="auto"
        height="auto"
        src={isMobile ? LogoMobile : LogoDesktop}
        alt="Brand Logo"
      />
    </Box>
  )
}
