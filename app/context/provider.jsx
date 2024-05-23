'use client'

import { SnackbarProvider } from 'notistack'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

export const Providers = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <SnackbarProvider>{children}</SnackbarProvider>
    </AppRouterCacheProvider>
  )
}
