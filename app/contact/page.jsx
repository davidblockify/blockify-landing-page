'use client'

import { useRouter } from 'next/navigation'

import ContactForm from '@/components/Contact/ContactForm'
import ContactFormContainer from '@/components/Contact/ContactFormContainer'

export default function ContactPage() {
  const router = useRouter()

  const routingPath = router.asPath

  // Use a regular expression to extract the path after `#!` if it exists
  const path = (/#!(\/.*)$/.exec(routingPath) || [])[1]

  // If the path was successfully extracted, navigate to that path
  if (path) {
    console.log(path)
    router.replace(path)
  }
  return (
    <>
      <ContactFormContainer title="Contact us">
        <ContactForm />
      </ContactFormContainer>
    </>
  )
}
