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
      id="navbar"
      position="fixed"
      sx={{
        background: 'white',
        boxShadow: 0,
        color: 'white',
        background: 'black',
        height: '5.25rem',
      }}
    >
      <Container maxWidth="xl" className="h-full ">
        <Toolbar
          disableGutters
          className=" flex flex-wrap items-center justify-between h-full "
        >
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
