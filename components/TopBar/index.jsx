'use client'

import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import Container from '@mui/material/Container'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import LogoBlockify from './LogoBlockify'

const menuItems = [
  { index: 0, label: 'About Us', href: '/' },
  { index: 1, label: 'Service', href: '/service' },
  { index: 2, label: 'Blog', href: '/blog' },
  { index: 3, label: 'Contact', href: '/contact' },
]

function TopBar() {
  return (
    <AppBar
      position="static"
      sx={{ background: 'white', boxShadow: 0, color: 'black' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoBlockify displaySettings={{ xs: 'none', md: 'flex' }} />

          <LogoBlockify displaySettings={{ xs: 'flex', md: 'none' }} />

          <MobileMenu menuItems={menuItems} />

          <DesktopMenu menuItems={menuItems} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default TopBar
