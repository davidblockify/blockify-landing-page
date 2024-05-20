'use client'

import React, { useRef } from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import WelcomeText from './WelcomeText'

export default function Frame1() {
  const container = useRef()

  return (
    <Box
      sx={{
        // position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box>
        <Image
          ref={container}
          id="logo"
          src="/logo-blured.png"
          width={700}
          height={700}
          alt="logo"
        />
      </Box>

      <WelcomeText displaySettings={{ xs: 'none', md: 'flex' }} />
      <WelcomeText displaySettings={{ xs: 'flex', md: 'none' }} />
    </Box>
  )
}
