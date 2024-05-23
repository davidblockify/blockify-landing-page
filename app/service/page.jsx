import React from 'react'

import { Grid } from '@mui/material'

import Card from '@/components/Card'
import ServiceImage1 from '@/public/service-1.svg'
import ServiceImage2 from '@/public/service-2.svg'
import ServiceImage3 from '@/public/service-3.svg'
import ServiceImage4 from '@/public/service-4.svg'
import ServiceImage5 from '@/public/service-5.svg'
import ServiceImage6 from '@/public/service-6.svg'
import HeadingText from '@/components/HeadingText'

export default function ServicePage() {
  const servicesData = [
    {
      title: 'Strategy Assessment',
      description:
        'We evaluate your goals and the applicability of blockchain technology to your business, defining and prioritizing your digital transformation. This strategic assessment ensures that blockchain integration aligns with your business objectives and is both impactful and feasible.',
      img: ServiceImage1
    },
    {
      title: 'Hands-On Training & Rapid Prototyping',
      description:
        'Through technology leadership workshops and intensive training, we upskill your team while working side-by-side in rapid blockchain development environments. This hands-on approach accelerates your path to innovation, equipping your team with the necessary skills for successful blockchain implementation.',
      img: ServiceImage2
    },
    {
      title: 'Solution Design',
      description:
        'Our holistic solution design encompasses people, processes, operating models, and technology, ensuring that the blockchain solutions are fully integrated into your business. This approach enhances efficiency and scalability, maximizing the impact of your transformation.',
      img: ServiceImage3
    },
    {
      title: 'Build & Implementation',
      description:
        'We manage complex implementations, integrate third-party solutions, and perform custom coding to ensure that each blockchain solution fits seamlessly within your existing systems. Our tailored approach meets current needs and is scalable to future demands, delivering robust blockchain solutions.',
      img: ServiceImage4
    },
    {
      title: 'Assets & Solutions',
      description:
        'With proprietary software add-ons such as redaction tools, key management, and hardware security modules, we provide enhanced control and customization. These tools strengthen the security and functionality of your blockchain applications, giving you greater flexibility and control over your digital assets.',
      img: ServiceImage5
    },
    {
      title: 'Ecosystem Management',
      description:
        'We operate and manage your new blockchain networks and ecosystems, leveraging our proven expertise to ensure smooth operations. By handling the technical complexities of ecosystem management, we enable you to focus on strategic business activities.',
      img: ServiceImage6
    }
  ]

  return (
    <div className="mt-20">
      <HeadingText
        isUnderLine
        title={
          <p>
            Our
            <span className="text-app-green ml-4">service</span>
          </p>
        }
      />

      <Grid container spacing={3} rowSpacing={10}>
        {servicesData.map((i, idx) => (
          <Grid key={`item-service-${idx}`} item md={4} xs={6}>
            <Card imgSrc={i.img} title={i.title} description={i.description} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
