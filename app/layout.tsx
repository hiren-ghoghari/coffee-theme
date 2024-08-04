import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import ThemeConfig from '@/components/theme/theme-config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})
const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Enjoy Your Favorite Coffee with Ngopi',
  description:
    'Discover tranquility at Ngopi a sanctuary for unwinding, where your evenings are perfected with relaxation and rich flavors.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair_display.variable} ${inter.variable} text-base font-normal text-secondary`}
      >
        <Header />
        <ThemeConfig />
        {children}
      </body>
    </html>
  )
}
