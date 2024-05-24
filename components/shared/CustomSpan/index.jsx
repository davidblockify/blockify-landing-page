'use client'
import React from 'react'

import { styled } from '@mui/material/styles'

const SpanStyled = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main
}))

const CustomSpan = ({ children, ...props }) => {
  return <SpanStyled {...props}>{children}</SpanStyled>
}

export default CustomSpan
