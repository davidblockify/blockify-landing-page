import React from 'react'

import { Box, Grid } from '@mui/material'

import Card from '@/components/Card'
import Logo from '@/public/Logo.png'

export default function ServicePage() {
  return (
    <Box mb={20} mt={20}>
      <Grid container spacing={3} rowSpacing={10}>
        <Grid item xs={4} className="flex">
          <Card
            imgSrc={Logo}
            title="Strategy Assessment"
            description="We evaluate your goals and the applicability of
                        blockchain technology to your business, defining and
                        prioritizing your digital transformation. This strategic
                        assessment ensures that blockchain integration aligns
                        with your business objectives and is both impactful and
                        feasible."
          />
        </Grid>
        <Grid item xs={4} className="flex">
          <Card
            imgSrc={Logo}
            title="Hands-On Training & Rapid Prototyping"
            description="Through technology leadership workshops and intensive training, we upskill your team while working side-by-side in rapid blockchain development environments. This hands-on approach accelerates your path to innovation, equipping your team with the necessary skills for successful blockchain implementation."
          />
        </Grid>
        <Grid item xs={4} className="flex">
          <Card
            imgSrc={Logo}
            title="Solution Design"
            description="Our holistic solution design encompasses people, processes, operating models, and technology, ensuring that the blockchain solutions are fully integrated into your business. This approach enhances efficiency and scalability, maximizing the impact of your transformation."
          />
        </Grid>
        <Grid item xs={4} className="flex">
          <Card
            imgSrc={Logo}
            title="Build & Implementation"
            description="We manage complex implementations, integrate third-party solutions, and perform custom coding to ensure that each blockchain solution fits seamlessly within your existing systems. Our tailored approach meets current needs and is scalable to future demands, delivering robust blockchain solutions."
          />
        </Grid>
        <Grid item xs={4} className="flex">
          <Card
            imgSrc={Logo}
            title="Assets & Solutions"
            description="With proprietary software add-ons such as redaction tools, key management, and hardware security modules, we provide enhanced control and customization. These tools strengthen the security and functionality of your blockchain applications, giving you greater flexibility and control over your digital assets."
          />
        </Grid>
        <Grid item xs={4} className="flex">
          <Card
            imgSrc={Logo}
            title="Ecosystem Management"
            description="We operate and manage your new blockchain networks and ecosystems, leveraging our proven expertise to ensure smooth operations. By handling the technical complexities of ecosystem management, we enable you to focus on strategic business activities."
          />
        </Grid>
      </Grid>
    </Box>
  )
}
