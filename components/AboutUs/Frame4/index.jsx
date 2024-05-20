import React from 'react'

import Box from '@mui/material/Box'

// import { GREEN_TEXT_COLOR } from '@/app/shared/constants'
import BackgroundVideo from '@/components/BackgroundVideo'

const backgroundUrl =
  'https://vciflravlrgslrxhqidd.supabase.co/storage/v1/object/public/blockify-landing-page/bitcoin-bg.mp4?t=2024-05-17T10%3A46%3A52.045Z'

export default function Frame4() {
  return (
    <Box>
      <BackgroundVideo src={backgroundUrl} />
    </Box>
  )
}
