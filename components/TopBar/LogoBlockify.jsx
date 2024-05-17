import React from 'react'

import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Logo from '@/public/Logo.png'

export default function LogoBlockify({ displaySettings }) {
  return (
    <>
      <Box sx={{ display: displaySettings, mr: '0.5em' }}>
        <Image width={60} height={60} src={Logo} alt="Brand Logo" />
      </Box>

      <Typography
        variant={displaySettings.md !== 'flex' ? 'h5' : 'h4'}
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: displaySettings,
          flexGrow: displaySettings.md === 'none' ? 1 : undefined,
          fontFamily: 'monospace',
          fontWeight: { xs: 400, sm: 500, md: 700 },
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Blockify
      </Typography>
    </>
  )
}
