import React from 'react'

import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function HorizontalBanner({
  headline,
  bodyText,
  media,
  mediaWidth = '66%',
  textAlign = 'left'
}) {
  const isTextLeftAligned = textAlign === 'left'
  const textWidth = `${100 - parseFloat(mediaWidth.replace('%', ''))}%`
  const textContent = (
    <Box position="relative" width={{ xs: '100%', md: '100%', lg: textWidth }}>
      <Box
        position={{ xs: 'relative', lg: 'absolute' }}
        ml={!isTextLeftAligned ? 2.5 : 0}
        mr={isTextLeftAligned ? 2.5 : 0}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        textAlign="left"
        bottom={0}
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
  )

  const mediaContent = (
    <Box
      position="relative"
      width={{ xs: '100%', lg: textWidth }}
      height="100%"
      borderRadius={4}
    >
      {media}
    </Box>
  )

  return (
    <Box
      position="relative"
      flexDirection={{ xs: 'column', lg: 'row' }}
      display="flex"
      width="100%"
    >
      {isTextLeftAligned ? (
        <>
          {textContent}
          {mediaContent}
        </>
      ) : (
        <>
          {mediaContent}
          {textContent}
        </>
      )}
    </Box>
  )
}

HorizontalBanner.propTypes = {
  headline: PropTypes.string,
  bodyText: PropTypes.string,
  media: PropTypes.node,
  mediaWidth: PropTypes.string,
  textAlign: PropTypes.string,
  display: PropTypes.object
}
