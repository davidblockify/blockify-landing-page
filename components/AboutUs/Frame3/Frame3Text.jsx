import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { GREEN_TEXT_COLOR } from '@/shared/constants'
import { getHeaderVarient, getContentVarient } from '@/components/utils/helpers'

const textStyles = {
  desktop: {
    bottom: 0,
    right: 0,
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'right',
    paddingRight: '5%',
    paddingBottom: '5%'
  },
  mobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: '5%'
  }
}

export default function Frame3Text({
  displaySettings = { xs: 'none', md: 'flex' }
}) {
  const headerVariant = getHeaderVarient(displaySettings, 'h3', 'h5')
  const contentVariant = getContentVarient(displaySettings)

  return (
    <Box
      zIndex={1}
      position="relative"
      sx={{
        width: '100%',
        height: '100%',
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        display: displaySettings
      }}
    >
      <Box
        position="absolute"
        sx={
          displaySettings.md === 'flex' ? textStyles.desktop : textStyles.mobile
        }
      >
        <Typography variant={headerVariant}>
          <span style={{ fontWeight: 'bold', color: GREEN_TEXT_COLOR }}>
            Call
          </span>
          <span> to action</span>
        </Typography>
        <br />
        <Typography variant={contentVariant}>
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
