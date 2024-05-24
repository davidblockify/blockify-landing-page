import React from 'react'

import { ToastContainer } from 'react-toastify'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import TopBar from '@/components/TopBar'
import { inter, nunitoSans } from '@/ui/fonts'
import theme from '@/theme'
import ViewportBackground from '@/components/ViewportBackground'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

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
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
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
