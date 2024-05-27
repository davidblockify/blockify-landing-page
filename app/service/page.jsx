'use client'
import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Card from '@/components/Card'
import ServiceImage1 from '@/public/service-1.svg'
import ServiceImage2 from '@/public/service-2.svg'
import ServiceImage3 from '@/public/service-3.svg'
import ServiceImage4 from '@/public/service-4.svg'
import ServiceImage5 from '@/public/service-5.svg'
import ServiceImage6 from '@/public/service-6.svg'
import HeadingText from '@/components/HeadingText'
import withNoSSR from '@/hocs/withNoSSR'
import useViewPort from '@/hooks/useViewPort'

function ServicePage() {
  const { isTablet } = useViewPort()

  const servicesData = [
    {
      title: 'Strategy Assessment',
      description:
        'We analyze your goals and assess how blockchain can impact your business, providing clear strategies to guide your transformation efforts effectively.',
      img: ServiceImage1
    },
    {
      title: isTablet
        ? 'Rapid Prototyping'
        : 'Hands-On Training & Rapid Prototyping',
      description:
        "Our expert-led workshops and training sessions enhance your team's blockchain skills, fast-tracking your development and readiness for blockchain integration.",
      img: ServiceImage2
    },
    {
      title: 'Solution Design',
      description:
        'We design comprehensive blockchain solutions that streamline your processes and systems, boosting your business efficiency and readiness for future growth.',
      img: ServiceImage3
    },
    {
      title: 'Build & Implementation',
      description:
        'Our team expertly manages the integration of blockchain into your existing systems, ensuring a seamless implementation that scales with your needs.',
      img: ServiceImage4
    },
    {
      title: 'Assets & Solutions',
      description:
        'We offer customized blockchain enhancements, like improved security features and management tools, to give you more control over your blockchain applications.',
      img: ServiceImage5
    },
    {
      title: 'Ecosystem Management',
      description:
        'Let us manage your blockchain infrastructure so you can concentrate on your core business, assured that your blockchain operations are optimized and effective.',
      img: ServiceImage6
    }
  ]

  return (
    <Box pt={15} pb={10}>
      <HeadingText
        isUnderLine
        title={
          <span>
            Our
            <span className="text-app-green ml-4">service</span>
          </span>
        }
      />

      <Grid container spacing={3} rowSpacing={isTablet ? 1 : 8}>
        {servicesData.map((i, idx) => (
          <Grid key={`item-service-${idx}`} item md={4} sm={6} xs={12}>
            <Card
              imgSrc={i.img}
              title={i.title}
              description={i.description}
              size={isTablet ? 72 : 84}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default withNoSSR(ServicePage)
