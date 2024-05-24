import { globalIcon, locationIcon } from '@/shared/constants'

const { Typography, Stack } = require('@mui/material')

const items = [
  {
    icon: globalIcon,
    content: 'www.blockify.it'
  },
  {
    icon: locationIcon,
    content: '46, Ta Hien Street, Thanh My Loi Ward, Thu Duc City, HCMC'
  }
]

const renderCompanyInfoList = (items) => {
  return items.map((item, index) => (
    <div key={index} className="w-full flex flex-row items-center gap-1">
      <div>{item.icon}</div>
      <Typography
        sx={{ typography: { xs: 'body1', md: 'h8' }, color: 'white' }}
      >
        {item.content}
      </Typography>
    </div>
  ))
}

const ContactFormContainer = ({ children, title }) => {
  return (
    <div className="lg:w-3/4 w-full h-full flex flex-col rounded-lg">
      <div className="w-full lg:h-[8rem] h-[10rem]  bg-app-green flex flex-row  justify-center rounded-lg lg:rounded-br-none lg:rounded-bl-none  drop-shadow-lg">
        <div className="w-[85%] h-full flex lg:flex-row flex-col lg:items-center justify-center">
          <div className="lg:w-[40%] lg:h-3/4">
            <Typography
              variant="h5"
              sx={{
                typography: { lg: 'h3', md: 'h4' }
              }}
              color={'white'}
            >
              {title}
            </Typography>
            <hr className="w-44 border-white border-2 rounded-sm" />
          </div>
          <Stack className="lg:h-full" justifyContent="center" gap={1}>
            {renderCompanyInfoList(items)}
          </Stack>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center bg-white lg:drop-shadow-lg">
        {children}
      </div>
    </div>
  )
}

export default ContactFormContainer
