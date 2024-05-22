import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import { inter } from '@/ui/fonts'

const SpanStyled = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main
}))
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
        color="white"
        sx={{
          typography: { xs: 'h5', md: 'h2', lg: 'h2' },
          fontFamily: `var(--${inter.variable})`,
          textAlign: 'center'
        }}
      >
        Welcome to <SpanStyled>Blockify</SpanStyled>
        <br />
        Reorganizing the World <SpanStyled>Through Blockchain</SpanStyled>
      </Typography>
    </Box>
  )
}
