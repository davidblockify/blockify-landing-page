import React from 'react'

import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function HorizontalBanner({
  headline,
  bodyText,
  media,
  mediaWidth = '66%',
  textAlign = 'left',
  display = { xs: 'flex', md: 'flex' }
}) {
  const isTextLeftAligned = textAlign === 'left'
  const textWidth = `${100 - parseFloat(mediaWidth.replace('%', ''))}%`

  const textContent = (
    <Box position="relative" width={textWidth}>
      <Box
        position="absolute"
        ml={!isTextLeftAligned ? 2.5 : 0}
        mr={isTextLeftAligned ? 2.5 : 0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: textAlign === 'left' ? 'flex-start' : 'flex-end',
          textAlign: textAlign,
          bottom: 0,
          right: 0
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
  )

  const mediaContent = (
    <Box width={mediaWidth} height="100%" borderRadius={4}>
      {media}
    </Box>
  )

  return (
    <Box position="relative" flexDirection="row" display={display} width="100%">
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
  textAlign: PropTypes.string,
  alignItems: PropTypes.string
}
