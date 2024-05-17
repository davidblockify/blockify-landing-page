import React from 'react'

import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Logo from '@/public/Logo.png'

export default function LogoBlockify({ displaySettings }) {
  const blockifyVariant = displaySettings.md !== 'flex' ? 'h5' : 'h4'
  const blockifyFlexGrow = displaySettings.md === 'none' ? 1 : undefined
  const logoSize = displaySettings.md !== 'flex' ? 45 : 60

  return (
    <>
      <Box sx={{ display: displaySettings, mr: '0.5em' }}>
        <Image width={logoSize} height={logoSize} src={Logo} alt="Brand Logo" />
      </Box>

      <Typography
        variant={blockifyVariant}
        noWrap
        component="a"
        href="/"
        sx={{
          display: displaySettings,
          flexGrow: { blockifyFlexGrow },
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
