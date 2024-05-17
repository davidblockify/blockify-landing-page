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
    <>
      <div className="relative flex flex-col items-center w-full h-screen">
        <Image
          ref={container}
          id="logo"
          src="/logo-blured.png"
          width={700}
          height={700}
          alt="logo"
        />
        <Box className="absolute top-[60%] w-full  flex flex-col items-center">
          <Typography
            sx={{
              fontFamily: inter.variable,
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3">
              Welcome to{' '}
              <span style={{ fontWeight: 'bold', color: GREEN_TEXT_COLOR }}>
                Blockify
              </span>
            </Typography>
            <Typography variant="h3">
              Reorganizing the World{' '}
              <span style={{ fontWeight: 'bold', color: GREEN_TEXT_COLOR }}>
                Through BlockChain
              </span>
            </Typography>
          </Typography>
        </Box>
      </div>
    </>
  )
}
