'use client'

import React from 'react'

import Image from 'next/image'

import { Box } from '@mui/material'

// const menuItems = [
//   { index: 0, label: 'About Us', href: '/' },
//   { index: 1, label: 'Service', href: '/service' },
//   { index: 2, label: 'Contact', href: '/contact' }
// ]

function Footer() {
  return (
    <Box px="10%">
      <Box
        sx={{
          width: { md: '168px', xs: '64px' },
          height: { md: '160px', xs: '61px' },
          position: 'relative'
        }}
      >
        <Image
          src={'/logo-vertical.png'}
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Box>
  )
}
export default Footer
