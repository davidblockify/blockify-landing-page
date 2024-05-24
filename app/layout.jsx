import React from 'react'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import TopBar from '@/components/TopBar'
import { inter, nunitoSans } from '@/ui/fonts'
import theme from '@/theme'
import ViewportBackground from '@/components/ViewportBackground'
import './globals.css'

export const metadata = {
  title: 'Blockify',
  description: 'Blockify',
  icons: {
    icon: '/logo.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nunitoSans.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TopBar />
            <ViewportBackground>
              <Box px="10%" width="80wv">
                {children}
              </Box>
            </ViewportBackground>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
