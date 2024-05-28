import Image from 'next/image'

export default function Background({ textBackground, imgSrc }) {
  return (
    <>
      {textBackground ? (
        <div className="relative">
          <div
            style={{
              position: 'relative',
              width: '100%',
              clipPath: 'inset(0 0 0 0)',
              zIndex: '-10'
            }}
          >
            <Image
              src={imgSrc}
              sizes="100vw"
              style={{ width: '100%' }}
              alt="background"
              className="h-[576px] sm:h-[872px] md:h-[1024px]"
            />
          </div>
          {textBackground}
        </div>
      ) : (
        <div
          style={{
            position: 'relative',
            width: '100%',
            clipPath: 'inset(0 0 0 0)',
            zIndex: '-10'
          }}
        >
          <Image
            src={imgSrc}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="background"
          />
        </div>
      )}
    </>
  )
}
