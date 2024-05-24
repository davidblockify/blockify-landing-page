import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { inter } from '@/ui/fonts'

export default function WelcomeText() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography
        sx={{
          typography: { xs: 'h5', md: 'h2' },
          fontFamily: `var(--${inter.variable})`,
          color: 'white',
          textAlign: 'center'
        }}
      >
        Welcome to{' '}
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Blockify</span>
      </Typography>
      <Typography
        sx={{
          typography: { xs: 'h5', md: 'h2' },
          fontFamily: `var(--${inter.variable})`,
          color: 'white',
          textAlign: 'center'
        }}
      >
        Reorganizing the World
      </Typography>
      <Typography
        sx={{
          typography: { xs: 'h5', md: 'h2' },
          fontFamily: `var(--${inter.variable})`,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold !important'
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
          Through Blockchain
        </span>
      </Typography>
    </Box>
  )
}
