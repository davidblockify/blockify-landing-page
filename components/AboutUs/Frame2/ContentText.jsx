import Typography from '@mui/material/Typography'

export default function ContentText({
  id,
  isTextFull,
  greenHeading,
  heading,
  boldContent,
  content
}) {
  return (
    <div
      id={id}
      className={`flex flex-col gap-8 justify-end h-full ${!isTextFull ? ' lg:w-[60%]  xl:w-[80%]' : ''} w-full lg:text-start text-center sm:text-[1rem] text-[0.5rem]`}
    >
      <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }}>
        <span className="text-app-green">{greenHeading}</span> {heading}
      </Typography>
      <Typography sx={{ typography: { xs: 'body1', md: 'h6' } }}>
        <span className="font-bold">{boldContent}</span> {content}
      </Typography>
    </div>
  )
}
