import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function VerticalBanner({ header, content, media }) {
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
            alignItems: 'center',
            textAlign: 'center',
            paddingBottom: 1.5
          }}
        >
          <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }}>
            {header}
          </Typography>
          <br />
          <Typography sx={{ typography: { xs: 'body1', md: 'h6' } }}>
            {content}
          </Typography>
        </Box>
      </Box>

      <Box
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        display="flex"
      >
        {media}
      </Box>
    </Box>
  )
}
