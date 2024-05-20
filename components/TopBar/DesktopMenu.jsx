import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { getTabIndex } from '../utils/helpers'

import { GREEN_TEXT_COLOR } from '@/shared/constants'
import { nunitoSans } from '@/ui/fonts'

const StyledTypograpghy = styled(Typography)(({ isSelected }) => ({
  color: isSelected ? GREEN_TEXT_COLOR : 'white',
  fontFamily: `var(--${nunitoSans.variable})`,
  fontWeight: 'h5',
  textTransform: 'none',
  fontSize: '1.4em',
  lineHeight: '1.4em',
}))

export default function DesktopMenu({ menuItems }) {
  const pathname = usePathname() || '/'
  const [currentTabPathname, setCurrentTabPathname] = useState(
    getTabIndex(pathname),
  )
  useEffect(() => {
    setCurrentTabPathname(pathname)
  }, [pathname])

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'end',
      }}
    >
      <Box sx={{ marginTop: '1.5rem' }}>
        {menuItems.map((menuItem) => {
          const isSelected = menuItem.href === currentTabPathname

          return (
            <Button key={menuItem.index}>
              <Link href={menuItem.href}>
                <StyledTypograpghy isSelected={isSelected}>
                  {menuItem.label}
                </StyledTypograpghy>
              </Link>
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}
