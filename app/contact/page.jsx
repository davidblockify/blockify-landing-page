import { useEffect } from 'react'

import { useRouter } from 'next/router'

import ContactForm from '@/components/Contact/ContactForm'
import ContactFormContainer from '@/components/Contact/ContactFormContainer'

export default function ContactPage() {
  const router = useRouter()

  useEffect(() => {
    // Get the `asPath` property from the router, which represents the path shown in the browser
    const routingPath = router.asPath

    // Use a regular expression to extract the path after `#!` if it exists
    const path = (/#!(\/.*)$/.exec(routingPath) || [])[1]

    // If the path was successfully extracted, navigate to that path
    if (path) {
      router.replace(path)
    }
  }, [router])
  return (
    <>
      <ContactFormContainer title="Contact us">
        <ContactForm />
      </ContactFormContainer>
    </>
  )
}
