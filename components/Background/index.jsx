import Image from 'next/image'

export default function Background({ imgSrc }) {
  return (
    <div
      style={{
        position: 'relative',
        height: '462px',
        width: '100%',
        clipPath: 'inset(0 0 0 0)'
      }}
    >
      <Image
        src={imgSrc}
        layout="fill"
        objectFit="center"
        sizes="100vw"
        alt="background"
      />
    </div>
  )
}
