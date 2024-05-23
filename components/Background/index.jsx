import Image from 'next/image'

export default function Background({ imgSrc }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        clipPath: 'inset(0 0 0 0)'
      }}
    >
      <Image
        src={imgSrc}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        alt="background"
      />
    </div>
  )
}
