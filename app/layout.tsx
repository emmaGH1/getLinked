import '@/app/css/globals.css'
import type { Metadata } from 'next'
import { Montserrat, Unica_One, Inter } from 'next/font/google'
import localFont from 'next/font/local'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const unicaOne = Unica_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-unica-one',
})

const clashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/ClashDisplay-Bold.woff2',
      weight: '600',
      style: 'normal'
    },
  ],
  display: 'swap',
  weight: '700',
  variable: '--font-clash-display',
})

export const metadata: Metadata = {
  title: {
    template: '%s | getlinked',
    default: 'getlinked', 
  },
  description: 'Igniting a revolution in HR Innovation'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${unicaOne.variable} ${clashDisplay.variable} ${inter.variable}`}>
      <body className={`${montserrat.className} bg-home text-primary`}>{children}</body>
    </html>
  )
}
