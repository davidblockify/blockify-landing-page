import { Inter } from 'next/font/google'
import './globals.css'
import gsap from "gsap";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>

        <main className="h-[350vh]">{children}</main>
      </body>
    </html>
  )
}
