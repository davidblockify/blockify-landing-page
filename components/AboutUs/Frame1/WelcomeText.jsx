import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { GREEN_TEXT_COLOR } from '@/app/shared/constants'
import { inter } from '@/app/ui/fonts'
import { getHeaderVarient } from '@/components/shared/helpers'

export default function WelcomeText({
  displaySettings = { xs: 'none', md: 'flex' }
}) {
  const welcomeTextVariant = getHeaderVarient(displaySettings)

  return (
    <Box
      sx={{
        // position: 'relative',
        display: displaySettings,
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography
        variant={welcomeTextVariant}
        sx={{
          fontFamily: `var(--${inter.variable})`,
          color: 'white',
          textAlign: 'center'
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
  )
}
