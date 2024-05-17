import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material/styles'

import { a11yProps, getTabIndex } from '../shared/helpers'
import { GREEN_TEXT_COLOR } from '@/app/shared/constant'

const StyledTab = styled(Tab)({
  color: 'white',
  '&.Mui-selected': {
    color: `${GREEN_TEXT_COLOR}`,
  },
  fontFamily: 'var(--font-nunito)',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '20px',
  lineHeight: '28px',
})

export default function DesktopMenu({ menuItems }) {
  const pathname = usePathname() || '/'

  const [currentTabIndex, setCurrentTabIndex] = useState(getTabIndex(pathname))

  const handleChangeTab = (_event, newTabIndex) => {
    setCurrentTabIndex(newTabIndex)
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        borderColor: 'divider',
        justifyContent: 'end',
      }}
    >
      <Tabs value={currentTabIndex} onChange={handleChangeTab}>
        {menuItems.map((menuItem) => {
          return (
            <StyledTab
              key={menuItem.index}
              LinkComponent={Link}
              href={menuItem.href}
              label={menuItem.label}
              value={menuItem.index}
              {...a11yProps(menuItem.index)}
            />
          )
        })}
      </Tabs>
    </Box>
  )
}
