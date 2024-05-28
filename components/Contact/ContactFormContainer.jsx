import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import LocationIcon from '@/public/icons/location-icon.svg'
import GlobalIcon from '@/public/icons/global-icon.svg'

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
      <Image loading="lazy" src={item.icon} width={20} alt="title" />
      <Typography color="white" variant="body1">
        {item.content}
      </Typography>
    </div>
  ))
}

const ContactFormContainer = ({ children, title }) => {
  return (
    <div className="lg:w-4/5 w-full h-full flex flex-col rounded-lg mb-5">
      <div className="w-full lg:h-[8rem] h-[10rem] bg-[#0FCB52] flex flex-row justify-center rounded-lg md:rounded-br-none md:rounded-bl-none drop-shadow-lg">
        <div className="w-[88%] h-full flex lg:flex-row flex-col lg:items-center lg:justify-between sm:justify-center gap-5">
          <div className="lg:w-[40%]">
            <div className="max-w-max">
              <Typography
                color="white"
                sx={{
                  typography: { xs: 'h6', md: 'h3' }
                }}
              >
                {title}
              </Typography>

              <hr className="w-[60%] border-white border-2 rounded-sm" />
            </div>
          </div>

          <Stack className="lg:h-full" justifyContent="center">
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
