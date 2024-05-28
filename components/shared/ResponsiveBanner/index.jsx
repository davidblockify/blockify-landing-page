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
  mediaWidth = 66,
  align = 'left'
}) {
  const { isMediumScreenWidth } = useViewPort()

  const textWidth = ['left', 'right'].includes(align)
    ? `${100 - mediaWidth}%`
    : '100%'

  const spacing = (type) =>
    align.includes(type) && !isMediumScreenWidth ? 2.5 : 0

  const direction = () =>
    ({
      right: isMediumScreenWidth ? 'column' : 'row-reverse',
      left: 'row'
    })[align] || 'column'

  const textContent = (
    <Box
      id={id}
      position="relative"
      width={{
        xs: '100%',
        md: '100%',
        lg: textWidth
      }}
      flexDirection="column"
      display="flex"
      justifyContent="end"
    >
      <Box
        position={{
          md: 'relative',
          lg: ['left', 'right'].includes(align) ? 'absolute' : 'relative'
        }}
        ml={spacing('right')}
        mr={spacing('left')}
        display="flex"
        flexDirection="column"
        textAlign="left"
        alignItems={{ xs: 'center', lg: 'flex-start' }}
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
      width={{ xs: '100%', md: '100%', lg: `${mediaWidth}%` }}
      height="100%"
      borderRadius={4}
      overflow="hidden"
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
        lg: direction()
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
