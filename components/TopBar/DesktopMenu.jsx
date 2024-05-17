import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import { a11yProps, getTabIndex } from '../shared/helpers'

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
      }}
    >
      <Tabs value={currentTabIndex} onChange={handleChangeTab}>
        {menuItems.map((menuItem) => {
          return (
            <Tab
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
