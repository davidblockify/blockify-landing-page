'use client'

import React, { useRef } from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import WelcomeText from './WelcomeText'

export default function Frame1() {
  const container = useRef()

  return (
    <Box
      position="static"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
      }}
    >
      <Box mb={4}>
        <Image
          ref={container}
          id="logo"
          src="/logo-blured.png"
          width={555}
          height={555}
          alt="logo"
        />
      </Box>

      <WelcomeText />
    </Box>
  )
}
