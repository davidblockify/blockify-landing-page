'use client'

import { usePathname } from 'next/navigation'

export default function ViewportBackground({ children }) {
  const pathname = usePathname()

  const homeStyles =
    pathname === '/' ? 'bg-[url(/background.png)] bg-cover bg-center' : ''

  return (
    <div className={`mx-auto my-10 h-screen ${homeStyles}`}>{children}</div>
  )
}
