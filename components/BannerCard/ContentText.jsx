import Typography from '@mui/material/Typography'

import { inter } from '@/ui/fonts'

export default function ContentText({
  id,
  isTextFull,
  greenHeading,
  heading,
  boldContent,
  content,
}) {
  return (
    <div id={id} className="w-full lg:h-[90%] 2xl:h-full lg:w-1/2">
      <div
        className={`flex flex-col gap-8 justify-end h-full ${!isTextFull ? ' lg:w-[60%]  xl:w-[80%]' : ''} w-full lg:text-start text-center sm:text-[1rem] text-[0.5rem]`}
      >
        <Typography
          variant="h2"
          className="!text-[2rem] lg:!text-[3rem]"
          sx={{
            fontFamily: `var(--${inter.variable})`,
            fontWeight: 800,
            color: 'white',
          }}
        >
          <span className="text-app-green">{greenHeading}</span> {heading}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: 'white',
            fontFamily: `var(--${inter.variable})`,
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '-1.1%',
          }}
        >
          <p>
            <span className="font-bold">{boldContent}</span> {content}
          </p>
        </Typography>
      </div>
    </div>
  )
}
