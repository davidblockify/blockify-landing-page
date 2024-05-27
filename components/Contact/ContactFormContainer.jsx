import Image from 'next/image'

import GlobalIcon from '@/public/icons/global-icon.svg'
import LocationIcon from '@/public/icons/location-icon.svg'

const { Typography, Stack } = require('@mui/material')

const items = [
  {
    icon: GlobalIcon,
    content: 'www.blockify.it'
  },
  {
    icon: LocationIcon,
    content: '46, Ta Hien Street, Thanh My Loi Ward, Thu Duc City, HCMC'
  }
]

const renderCompanyInfoList = (items) => {
  return items.map((item, index) => (
    <div key={index} className="w-full flex flex-row gap-1 items-start">
      <Image loading="lazy" src={item.icon} width={20} alt={'title'} />
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
    <div className="lg:w-3/4 w-full h-full flex flex-col rounded-lg mb-5">
      <div className="w-full lg:h-[8rem] h-[10rem] bg-[#0FCB52] flex flex-row justify-center rounded-lg md:rounded-br-none md:rounded-bl-none drop-shadow-lg">
        <div className="w-[85%] h-full flex lg:flex-row flex-col lg:items-center justify-center gap-5">
          <div className="lg:w-[40%] lg:h-3/4">
            <Typography
              variant="h5"
              sx={{
                typography: { lg: 'h3', md: 'h4' },
                width: 'max-content'
              }}
              color={'white'}
            >
              {title}
              <hr className="w-[60%] border-white border-2 rounded-sm" />
            </Typography>
          </div>
          <Stack className="lg:h-full" justifyContent="center" gap={1}>
            {renderCompanyInfoList(items)}
          </Stack>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center bg-white md:drop-shadow-lg rounded-lg xs:rounded-br-none xs:rounded-bl-none">
        {children}
      </div>
    </div>
  )
}

export default ContactFormContainer
