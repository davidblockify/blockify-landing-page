import React from 'react'

import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import useViewPort from '@/hooks/useViewPort'

function ResponsiveBanner({
  id,
  headline,
  bodyText,
  media,
  mediaWidth = '66%',
  alignRight = false
}) {
  const { isMediumScreenWidth } = useViewPort()

  const textWidth = `${100 - parseFloat(mediaWidth.replace('%', ''))}%`

  const textContent = (
    <Box
      id={id}
      position="relative"
      width={{ xs: '100%', md: '100%', lg: textWidth }}
      flexDirection="column"
      display="flex"
    >
      <Box
        position={{ md: 'relative', lg: 'absolute' }}
        ml={alignRight && !isMediumScreenWidth ? 2.5 : 0}
        mr={!alignRight && !isMediumScreenWidth ? 2.5 : 0}
        display="flex"
        flexDirection="column"
        textAlign="left"
        alignItems={{ xs: 'center', lg: 'flex-start' }}
        bottom={0}
        pb={{ xs: 1.5, lg: 0 }}
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
      width={{ xs: '100%', md: '100%', lg: mediaWidth }}
      height="100%"
      borderRadius={4}
    >
      {media}
    </Box>
  )

  return (
    <Box
      position="relative"
      flexDirection={{
        xs: 'column',
        md: 'column',
        lg: alignRight && !isMediumScreenWidth ? 'row-reverse' : 'row'
      }}
      display="flex"
      width="100%"
    >
      {textContent}
      {mediaContent}
    </Box>
  )
}

ResponsiveBanner.propTypes = {
  headline: PropTypes.string,
  bodyText: PropTypes.string,
  media: PropTypes.node,
  mediaWidth: PropTypes.string,
  alignRight: PropTypes.bool
}
export default ResponsiveBanner
