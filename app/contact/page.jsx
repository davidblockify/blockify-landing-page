'use client'

import { useEffect } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import ContactForm from '@/components/Contact/ContactForm'
import ContactFormContainer from '@/components/Contact/ContactFormContainer'

export default function ContactPage() {
  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    // Only run this effect client-side
    if (typeof window !== 'undefined') {
      // Get the full URL hash including the `#!` if it exists
      const hash = window.location.hash
      console.log(hash)

      // Extract the path after `#!` if it exists
      const isRefresh = hash.startsWith('#!') ? true : false
      console.log('isRefesh', isRefresh)
      console.log('path', path)

      // If the path was successfully extracted, navigate to that path
      if (isRefresh) {
        router.replace(path)
      }
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
