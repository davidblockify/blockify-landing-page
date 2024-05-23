import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const textStyles = {
  desktop: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'right',
    bottom: 0,
    right: 0
  },

  mobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: 1.5
  }
}

const SpanStyled = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main
}))

export default function Frame3Text({
  displaySettings = { xs: 'none', md: 'none', lg: 'flex' }
}) {
  const isLargeDisplayFlex = displaySettings.lg === 'flex'

  return (
    <Box
      position="relative"
      ml={isLargeDisplayFlex ? 2.5 : 0}
      sx={{
        width: { xs: '100%', md: '100%', lg: '33%' },
        display: displaySettings
      }}
    >
      <Box
        position="absolute"
        sx={isLargeDisplayFlex ? textStyles.desktop : textStyles.mobile}
      >
        <Typography sx={{ typography: { xs: 'h5', md: 'h3', lg: 'h3' } }}>
          <SpanStyled>Call</SpanStyled>
          <span> to action</span>
        </Typography>
        <br />
        <Typography sx={{ typography: { xs: 'body', md: 'h6', lg: 'h6' } }}>
          <span>
            Whether you&apos;re looking to intergrate blockchain into your
            existing operations or start a new venture, we prodive the expertise
            and tools necessary to seamlessly align your business model with the
            advencements of <span style={{ fontWeight: 'bold' }}>Web 3.0</span>
          </span>
        </Typography>
      </Box>
    </Box>
  )
}
