import Image from 'next/image'

import { CardContent, Typography } from '@mui/material'

export default function Card({ imgSrc, title, description }) {
  return (
    <CardContent className="bg-white relative">
      {imgSrc && (
        <Image
          src={imgSrc}
          width={100}
          height={100}
          alt={title}
          loading="lazy"
          className="absolute -top-12 left-5"
        />
      )}
      <Typography
        fontWeight="bold"
        gutterBottom
        variant="h5"
        className={`${imgSrc ? 'pt-10' : ''}`}
      >
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  )
}
