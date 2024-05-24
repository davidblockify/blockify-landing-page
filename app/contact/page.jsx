'use client'

import { usePathname, useRouter } from 'next/navigation'

import ContactForm from '@/components/Contact/ContactForm'
import ContactFormContainer from '@/components/Contact/ContactFormContainer'

export default function ContactPage() {
  const router = useRouter()
  const pathname = usePathname()

  // Use a regular expression to extract the path after `#!` if it exists
  const path = (/#!(\/.*)$/.exec(usePathname) || [])[1]
  console.log(path)
  console.log(pathname)

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
