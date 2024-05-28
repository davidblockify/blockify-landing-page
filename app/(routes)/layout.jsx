import React from 'react'

import { ToastContainer } from 'react-toastify'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'

import TopBar from '@/app/components/TopBar'
import { inter, nunitoSans } from '@/app/ui/fonts'
import theme from '@/app/theme'
import ViewportBackground from '@/app/components/ViewportBackground'

import './globals.css'

export const metadata = {
  title: 'Blockify',
  description: 'Blockify',
  icons: {
    icon: '/company-logo.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nunitoSans.variable}`}
        suppressHydrationWarning
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TopBar />
            <ViewportBackground>
              <Box px="10%" width="80wv">
                {children}
              </Box>
            </ViewportBackground>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
