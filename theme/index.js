'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    text: {
      primary: '#ffffff'
    },
    primary: {
      main: '#1ED760'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff'
        }
      }
    }
  }
})

export default theme
