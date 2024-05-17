import React, { useState } from 'react'

import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'

import CustomLink from '../shared/CustomLink'

export default function MobileMenu({ menuItems }) {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box>
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.index}>
              <CustomLink to={menuItem.href} color="black">
                {menuItem.label}
              </CustomLink>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  )
}
