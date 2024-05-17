import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import { GREEN_TEXT_COLOR } from '@/app/shared/constant'
import { nunitoSans } from '@/app/ui/fonts'
import CustomLink from '../shared/CustomLink'

const StyledButton = styled(Button)({
  color: 'white',
  '&.Mui-selected': {
    color: `${GREEN_TEXT_COLOR}`,
  },
  fontFamily: nunitoSans.variable,
  fontWeight: 700,
  textTransform: 'none',
  fontSize: 'h6',
  lineHeight: '1.4em',
})

export default function DesktopMenu({ menuItems }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        borderColor: 'divider',
        justifyContent: 'end',
      }}
    >
      <Box>
        {menuItems.map((menuItem) => {
          return (
            <StyledButton key={menuItem.index}>
              <Link href={menuItem.href}>{menuItem.label}</Link>
            </StyledButton>
          )
        })}
      </Box>
    </Box>
  )
}
