import Image from 'next/image'

import { CardContent, Typography } from '@mui/material'

export default function Card({ imgSrc, title, description, size }) {
  return (
    <CardContent className="bg-white flex flex-col items-center">
      {imgSrc && (
        <Image
          src={imgSrc}
          width={size}
          height={size}
          alt={title}
          loading="lazy"
        />
      )}
      <Typography
        fontWeight="bold"
        gutterBottom
        variant="h6"
        className={`${imgSrc ? 'pt-5' : ''} text-center`}
      >
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  )
}
