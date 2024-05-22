import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

import { inter } from '@/ui/fonts'

export default function WelcomeText() {
  const theme = useTheme()

  const primaryColor = theme.palette.primary.main

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography
        color="white"
        sx={{
          typography: { xs: 'h5', md: 'h2', lg: 'h2' },
          fontFamily: `var(--${inter.variable})`,
          textAlign: 'center'
        }}
      >
        Welcome to{' '}
        <span style={{ fontWeight: 'bold', color: primaryColor }}>
          Blockify
        </span>
        <br />
        Reorganizing the World{' '}
        <span style={{ fontWeight: 'bold', color: primaryColor }}>
          Through Blockchain
        </span>
      </Typography>
    </Box>
  )
}
