export const dynamic = 'force-dynamic'
import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import HeadingText from '@/app/components/HeadingText'
import ServiceList from '@/app/components/ServiceList/ServiceList'

function ServicePage() {
  return (
    <Box className="pt-[60px] md:pt-[120px]">
      <HeadingText
        isUnderLine
        title={
          <span className="font-bold">
            Our
            <span className="text-app-green ml-4">service</span>
          </span>
        }
      />

      <Grid container spacing={3} rowSpacing={true ? 1 : 8}>
        <ServiceList />
      </Grid>
    </Box>
  )
}

export default ServicePage
