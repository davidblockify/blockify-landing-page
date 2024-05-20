import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { GREEN_TEXT_COLOR } from '@/app/shared/constants'
import {
  getHeaderVarient,
  getContentVarient
} from '@/components/shared/helpers'

export default function Frame4Text({
  displaySettings = { xs: 'none', md: 'flex' }
}) {
  const headerVariant = getHeaderVarient(displaySettings, 'h3', 'h5')
  const contentVariant = getContentVarient(displaySettings)

  return (
    <Box
      sx={{
        color: 'white',
        display: displaySettings,
        flexDirection: 'column',
        alignItems: 'center'
      }}
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
  )
}
