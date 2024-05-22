import React from 'react'

import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { GREEN_TEXT_COLOR } from '@/shared/constants'
import { nunitoSans } from '@/ui/fonts'

const StyledTypograpghy = styled(Typography)(({}) => ({
  color: GREEN_TEXT_COLOR,
  fontFamily: `var(--${nunitoSans.variable})`,
  fontWeight: 'h5',
  textTransform: 'none',
  fontSize: '1.4em',
  lineHeight: '1.4em'
}))

export default function DesktopMenu({ menuItems }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'end'
      }}
    >
      <Box sx={{ marginTop: '1.5rem' }}>
        {menuItems.map((menuItem) => {
          return (
            <Button key={menuItem.index}>
              <Link href={menuItem.href}>
                <StyledTypograpghy>{menuItem.label}</StyledTypograpghy>
              </Link>
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}
