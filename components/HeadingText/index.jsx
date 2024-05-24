import Typography from '@mui/material/Typography'

export default function HeadingText({ isUnderLine, title }) {
  return (
    <div className="flex flex-col items-center mb-20">
      <Typography variant="h2">{title}</Typography>
      {isUnderLine && <hr className="w-44 border-2 border-black rounded-sm" />}
    </div>
  )
}
