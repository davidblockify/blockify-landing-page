import Image from 'next/image'

import { CardContent, Typography } from '@mui/material'

export default function Card({ imgSrc, title, description }) {
  return (
    <CardContent className="bg-white flex flex-col items-center">
      {imgSrc && (
        <Image src={imgSrc} width={84} height={84} alt={title} loading="lazy" />
      )}
      <Typography
        fontWeight="bold"
        gutterBottom
        variant="h6"
        className={`${imgSrc ? 'pt-5' : ''}`}
      >
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  )
}
