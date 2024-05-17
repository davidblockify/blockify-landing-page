/* eslint-disable react/no-unescaped-entities */
import { GREEN_TEXT_COLOR } from '@/app/shared/constant'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

export default function Frame2() {
  return (
    <div className="flex flex-col items-center gap-10 w-full lg:h-[150vh] h-[210vh] p-10">
      <div className="xl:w-[90%] 2xl:w-[75%]  lg:w-[100%] lg:h-[50vh] h-[70vh] flex lg:flex-row flex-col items-center gap-3">
        <div className="w-full lg:h-[90%] 2xl:h-full lg:w-1/2">
          <div className="flex flex-col gap-8 justify-end h-full lg:w-[60%] w-full lg:text-start text-center sm:text-[1rem] text-[0.5rem]">
            <Typography
              variant="h2"
              className="!text-[2rem] lg:!text-[3.5rem]"
              sx={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                color: `${GREEN_TEXT_COLOR}`,
              }}
            >
              Introduction
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: 'white',
                fontFamily: 'var(--font-inter)',
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '-1.1%',
              }}
            >
              <p>
                <span className="font-bold">Blockify</span> is pioneering the
                future of digital innovation with cutting-edge blockchain
                solutions tailored for the Web 3.0 era.
              </p>
            </Typography>
          </div>
        </div>
        <Image
          className="xl:w-[60%] lg:w-[60%] 2xl:h-full lg:h-[90%] md:w-3/4 h-full min-h-[10rem]  lg:rounded-3xl rounded-md"
          src="/introduction-img.png"
          width={1406}
          height={792}
          alt="introduction image"
        />
      </div>
      {/* -------------------------------------------------------------------------------------------------------------- */}
      <div className=" xl:w-[90%] 2xl:w-[75%]  lg:w-[100%] lg:h-[50vh] h-[70vh] flex lg:flex-row flex-col-reverse items-center gap-3">
        <div className="xl:w-[60%] lg:w-[60%] 2xl:h-full lg:h-[90%] md:w-3/4 h-full min-h-[10rem]  lg:rounded-3xl rounded-md ">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-fill rounded-3xl "
          >
            <source
              src="https://vciflravlrgslrxhqidd.supabase.co/storage/v1/object/public/blockify-landing-page/bitcoin-statement.mp4?t=2024-05-17T09%3A18%3A25.080Z"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex flex-col gap-8 lg:justify-end 2xl:h-full lg:w-1/2 w-full lg:text-start text-center lg:text-[20px] lg:h-[90%] ">
          <Typography
            variant="h2"
            className="!text-[2rem] lg:!text-[3.5rem]"
            sx={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 800,
              color: 'white',
            }}
          >
            <span className="text-app-green">Mission</span> Statement
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: 'white',
              fontFamily: 'var(--font-inter)',
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '-1.1%',
            }}
          >
            <p>
              <span className="font-bold">As a leader in IT services </span>
              specializing in blockchain technology, we are dedicated to
              transforming industries worldwide. Under our bold slogan, 'blocks
              the world,' we strive to unlock the full potential of blockchain
              technology, making every transaction more transparent, secure, and
              efficient
            </p>
          </Typography>
        </div>
      </div>
      <div className="xl:w-[90%] 2xl:w-[75%]  lg:w-[100%] lg:h-[50vh] h-[70vh] flex lg:flex-row flex-col items-center gap-3">
        <div className="w-full lg:h-[90%] 2xl:h-full lg:w-1/2">
          <div className="flex flex-col gap-8 justify-end h-full lg:w-[60%] w-full lg:text-start text-center sm:text-[1rem] text-[0.5rem]">
            <Typography
              variant="h2"
              className="!text-[2rem] lg:!text-[3.5rem]"
              sx={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 800,
                color: 'white',
              }}
            >
              <span className="text-app-green">Value</span> Proposition
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: 'white',
                fontFamily: 'var(--font-inter)',
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '-1.1%',
              }}
            >
              <p>
                At <span className="font-bold">Blockify</span>, we recognize
                that each business has unique needs. That's why we offer
                customized support from the initial stages of project planning
                through to development and execution.
              </p>
            </Typography>
          </div>
        </div>
        <Image
          className="xl:w-[60%] lg:w-[60%] 2xl:h-full lg:h-[90%] md:w-3/4 h-full min-h-[10rem]  lg:rounded-3xl rounded-md"
          src="/value-img.png"
          width={1406}
          height={792}
          alt="introduction image"
        />
      </div>
    </div>
  )
}
