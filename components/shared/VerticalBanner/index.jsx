import React from 'react'

import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function VerticalBanner({
  headline,
  bodyText,
  media,
  textAlign = 'left',
  alignItems = 'flex-start'
}) {
  return (
    <Box
      position="relative"
      flexDirection="column"
      justifyItems="center"
      width="100%"
    >
      <Box
        position="relative"
        sx={{
          width: '100%',
          color: 'white',
          display: 'flex'
        }}
      >
        <Box
          position="relative"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: alignItems,
            textAlign: textAlign,
            paddingBottom: 1.5
          }}
        >
          <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }}>
            {headline}
          </Typography>
          <br />
          <Typography sx={{ typography: { xs: 'body1', md: 'h6' } }}>
            {bodyText}
          </Typography>
        </Box>
      </Box>

      <Box
        width="100%"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        {media}
      </Box>
    </Box>
  )
}

VerticalBanner.propTypes = {
  headline: PropTypes.string,
  bodyText: PropTypes.string,
  textAlign: PropTypes.string,
  alignItems: PropTypes.string
}
