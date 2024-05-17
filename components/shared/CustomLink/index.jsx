import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import Typography from '@mui/material/Typography'

function CustomLink({
  to = '/',
  color = 'white',
  textDecoration = 'none',
  padding = '0px',
  children,
}) {
  return (
    <Link
      href={to}
      style={{ textDecoration: textDecoration, padding: padding }}
    >
      <Typography
        sx={{
          color: color,
          transition: 'background-color 0.3s',
          borderRadius: '4px',
        }}
      >
        {children}
      </Typography>
    </Link>
  )
}

CustomLink.propTypes = {
  to: PropTypes.string,
  linkColor: PropTypes.string,
  textDecoration: PropTypes.string,
  padding: PropTypes.string || PropTypes.number,
}

export default CustomLink
