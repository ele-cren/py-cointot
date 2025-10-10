import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { TailwindIndicator } from '@/src/components/layout/TailwindIndicator'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'Ostéopathe à Aime-la-Plagne – Pierre-Yves Cointot, bien-être et sport',
  description:
    'Pierre-Yves Cointot, ostéopathe à Aime-la-Plagne, soulage vos douleurs musculaires, articulaires et sportives. Séances sur rendez-vous pour tous.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
