import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Tigerweb Group | Connecting Data. Powering Futures.',
  description: 'Tigerweb Group provides expert IT services including Fibre Installation, Data Analytics, Informatics, and comprehensive IT Solutions. Connecting your business to the future.',
  keywords: 'fibre installation, IT services, data analytics, informatics, network solutions, internet connectivity',
  openGraph: {
    title: 'Tigerweb Group | Connecting Data. Powering Futures.',
    description: 'Expert IT services including Fibre Installation, Data Analytics, Informatics, and comprehensive IT Solutions.',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
