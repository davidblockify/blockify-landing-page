import React from 'react'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import TopBar from '@/components/TopBar'
import BackgroundVideo from '@/components/BackgroundVideo'
import { inter } from '@/ui/fonts'
import theme from '@/theme'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TopBar />
            <Box m="10%" width="80vw">
              {children}
            </Box>
            <BackgroundVideo />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
