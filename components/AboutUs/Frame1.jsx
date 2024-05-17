'use client'

import React, { useRef } from 'react'

import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { GREEN_TEXT_COLOR } from '@/app/shared/constant'
import { inter } from '@/app/ui/fonts'

export default function Frame1() {
  const container = useRef()

  return (
    <Box className="relative flex flex-col items-center w-full h-screen">
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

      <Box className="absolute top-[60%] w-full  flex flex-col items-center">
        <Typography
          variant="h3"
          sx={{
            fontFamily: `var(--${inter.variable})`,
            color: 'white',
            textAlign: 'center',
          }}
        >
          Welcome to{' '}
          <span style={{ fontWeight: 'bold', color: GREEN_TEXT_COLOR }}>
            Blockify
          </span>
          <br />
          Reorganizing the World{' '}
          <span style={{ fontWeight: 'bold', color: GREEN_TEXT_COLOR }}>
            Through Blockchain
          </span>
        </Typography>
      </Box>
    </Box>
  )
}
